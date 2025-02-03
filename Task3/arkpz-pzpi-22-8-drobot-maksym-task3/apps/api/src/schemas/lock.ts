import { z } from "zod";
import { ClusterIdSchema } from "@/schemas/cluster";

export const LockIdSchema = z.coerce.number();
export const LockNameSchema = z.string().min(1).max(255);

export const LockCreateRequestSchema = z.object({
  name: LockNameSchema,
  cluster_id: ClusterIdSchema,
});

export const LockUpdateRequestSchema = z.object({
  name: LockNameSchema,
});

export const LockEventsRetrieveRequestSchema = z.object({
  id: LockIdSchema
})
