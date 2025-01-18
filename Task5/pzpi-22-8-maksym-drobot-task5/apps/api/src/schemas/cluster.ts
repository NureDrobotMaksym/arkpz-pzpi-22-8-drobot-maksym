import { z } from "zod";

export const ClusterIdSchema = z.coerce.number();
export const ClusterNameSchema = z.string().min(1).max(255);
export const ClusterLocationSchema = z.string().min(1).max(256);
export const ClusterDescriptionSchema = z.string().min(1).max(256);
export const ClusterOperationalSchema = z.boolean();

export const ClusterCreateRequestSchema = z.object({
  name: ClusterNameSchema,
  location: ClusterLocationSchema,
  description: ClusterDescriptionSchema,
});

export const ClusterUpdateRequestSchema = z.object({
  name: ClusterNameSchema,
  location: ClusterLocationSchema,
  description: ClusterDescriptionSchema,
  operational: ClusterOperationalSchema
});

export const ClusterDeleteRequestSchema = z.object({
  id: ClusterIdSchema,
})