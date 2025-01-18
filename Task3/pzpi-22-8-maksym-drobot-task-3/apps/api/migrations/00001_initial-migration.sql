-- Enums

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'role') THEN
        CREATE TYPE "role" AS ENUM ('user', 'admin');
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'event_type') THEN
        CREATE TYPE "event_type" AS ENUM ('access_granted', 'access_denied');
    END IF;
END $$;

-- Functions

CREATE OR REPLACE FUNCTION update_timestamp()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Table

CREATE TABLE IF NOT EXISTS users
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "role" "role" DEFAULT 'user',
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS clusters
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "operational" BOOLEAN DEFAULT TRUE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "user_id" INTEGER,
    FOREIGN KEY ("user_id") REFERENCES users("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS locks
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "cluster_id" INTEGER,
    "user_id" INTEGER,
    FOREIGN KEY ("cluster_id") REFERENCES clusters("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("user_id") REFERENCES users("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Events are immutable

CREATE TABLE IF NOT EXISTS events
(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "type" "event_type",
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(),
    "lock_id" INTEGER,
    "user_id" INTEGER,
    FOREIGN KEY ("lock_id") REFERENCES locks("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("user_id") REFERENCES users("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Add triggers to automatically update the updated_at column

CREATE TRIGGER set_updated_at_users
    BEFORE UPDATE ON users
    FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER set_updated_at_locks
    BEFORE UPDATE ON locks
    FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER set_updated_at_clusters
    BEFORE UPDATE ON clusters
    FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
