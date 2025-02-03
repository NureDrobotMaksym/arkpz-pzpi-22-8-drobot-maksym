import express from "express";
import { verifyAccessToken } from "@/utils/token";
import { UserIdSchema, UserRoleSchema } from "@/schemas/user";

export function requireAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const authorization = req.headers.authorization?.split(" ").at(1);
  if (!authorization) {
    res.status(401).json({
      status: "failure",
      message: "No authorization token provided.",
    });

    return;
  }

  const verificationResult = verifyAccessToken(authorization);
  if (!verificationResult.valid) {
    res.status(403).json({
      status: "failure",
      message: "Authorization token is invalid.",
    });

    return;
  }

  const { id, role } = verificationResult.payload;

  if (id === undefined || role === undefined) {
    res.status(403).json({
      status: "failure",
      message: "Authorization token is missing user information.",
    });

    return;
  }

  const idValidationResult = UserIdSchema.safeParse(id);
  const roleValidationResult = UserRoleSchema.safeParse(role);

  if (!idValidationResult.success || !roleValidationResult.success) {
    res.status(400).json({
      status: "failure",
      message: "Authorization token contains invalid user information.",
    })

    return;
  }

  req.user = {
    id: id,
    role: role,
  };

  next();
}

export function requireRole(role: string) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.user?.role !== role) {
      res.status(403).json({
        status: "failure",
        message: "You do not have permission to access this endpoint.",
      });
    } else {
      next();
    }
  };
}
