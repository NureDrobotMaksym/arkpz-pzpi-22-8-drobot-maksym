import environment from "dotenv";
import schema from "@/schemas/config";

// Load environment variables

environment.config();

if (process.env.NODE_ENV === "production") {
  environment.config({ path: ".env.production" });
} else {
  environment.config({ path: ".env.development" });
}

// Parse environment variables

export default schema.parse(process.env);
