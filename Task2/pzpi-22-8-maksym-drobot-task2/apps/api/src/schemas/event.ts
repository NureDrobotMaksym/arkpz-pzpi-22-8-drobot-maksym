import { z } from "zod";
import { LockIdSchema } from "@/schemas/lock";

export const EventIdSchema = z.coerce.number();
export const EventTypeSchema = z.enum(["access_granted", "access_denied"]);

export const EventCreateRequestSchema = z.object({
  type: EventTypeSchema,
  lock_id: LockIdSchema
});

export const EventRetrieveRequestSchema = z.object({
  id: EventIdSchema,
})