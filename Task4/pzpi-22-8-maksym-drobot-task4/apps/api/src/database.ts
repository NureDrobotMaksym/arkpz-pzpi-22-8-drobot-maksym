import configuration from "@/utils/config";
import logger from "@/utils/logger";
import postgres from "postgres";

let database: postgres.Sql | undefined = undefined;

export default function () {
  try {
    logger.info("Connecting to the database.");

    const database = postgres(configuration.DATABASE_URL, {
      ssl: false,
      max: 10,
      idle_timeout: 30
    });

    logger.info("Connected to the database.");

    return database;
  } catch (error) {
    logger.error("Error connecting to the database: ", error);
  }

  return null;
}
