import fs from "node:fs";
import path from "node:path";
import postgres from "postgres";
import configuration from "@/utils/config"

const connectionString = configuration.DATABASE_URL;
const migrationsFolder = "./migrations";
const unfilteredMigrations = fs.readdirSync(migrationsFolder);

const migrations = unfilteredMigrations
  .filter((filename) => {
    const filepath = path.join(migrationsFolder, filename);

    if (!fs.statSync(filepath).isFile()) {
      console.error("Entry %s is not a file", filename);

      return false;
    }

    if (filename.match(/^[0-9]{5}_/) === null) {
      console.error("File %s does not follow the naming style", filename);

      return false;
    }

    return true;
  })
  .sort()
  .map((file) => ({
    id: parseInt(file.slice(0, 5)),
    name: file.slice(6),
    path: path.join(migrationsFolder, file),
  }));

const inconsistentNaming = migrations.some((migration, index) => {
  if (migration.id !== index + 1) {
    console.error(
      "Migration %s does not have valid id. Expected id %d, but got %d.",
      migration.name,
      index,
      migration.id,
    );

    return true;
  }

  return false;
});

if (unfilteredMigrations.length !== migrations.length || inconsistentNaming) {
  console.error("There were errors reading migrations");
  process.exit(1);
}

const totalMigrations = migrations.length;

if (totalMigrations === 0) {
  console.error("No migrations found.");
} else {
  console.info("Found %d migrations", totalMigrations);
}

const sql = postgres(connectionString);

let result;

result = sql`
    create table if not exists migrations
    (
        id         serial primary key,
        name       text,
        created_at timestamp with time zone not null default now()
    );
`;

result.catch((error) => {
  console.error("Could not ensure the migrations table exists:", error);
  sql.end();
});

result = sql`select id
             from migrations
             order by id desc
             limit 1`;

let current_migration = 0;

result
  .then((row) => {
    if (row.length === 0) {
      return;
    }

    current_migration = row[0] as any as number;
  })
  .catch((error) => {
    console.error("Could not ensure the migrations table exists:", error);
    sql.end();
  });

migrations.slice(current_migration).forEach((migration) => {
  sql
    .begin(async (sql) => {
      await sql.file(migration.path);

      await sql`
          insert into migrations (id, name) values (${migration.id}, ${migration.name})
      `;
    })
    .then(() => {
      console.info("Migration %d applied successfully", migration.id);
    })
    .catch((error) => {
      console.error("Failed to apply migration %d:", migration.id, error);
      sql.end();
      process.exit(1);
    });
});
