import { z } from "zod";

const ConfigurationSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET_KEY: z.string().min(32).max(64),
  MQTT_BROKER_URL: z.string().url(),
  MQTT_BROKER_TOPIC: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().positive().max(65536).default(3000),
});

export default ConfigurationSchema;
