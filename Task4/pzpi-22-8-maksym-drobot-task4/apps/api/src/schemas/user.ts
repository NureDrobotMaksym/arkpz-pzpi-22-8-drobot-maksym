import z from "zod";

export const UserIdSchema = z.coerce.number();
export const UserNameSchema = z.string();
export const UserEmailSchema = z.string().email();
export const UserPasswordSchema = z.string().min(8).max(64);
export const UserDescriptionSchema = z.string().max(255).optional();
export const UserRoleSchema = z.enum(["user", "admin"]);

export const UserSignUpRequestSchema = z.object({
  name: UserNameSchema,
  email: UserEmailSchema,
  password: UserPasswordSchema,
});

export const UserSignInRequestSchema = z.object({
  email: UserEmailSchema,
  password: UserPasswordSchema,
});

export const UserUpdateRequestSchema = z.object({
  name: UserNameSchema,
  description: UserDescriptionSchema,
});