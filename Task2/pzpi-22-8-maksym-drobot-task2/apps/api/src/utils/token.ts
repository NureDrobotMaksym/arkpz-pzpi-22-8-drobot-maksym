import jwt from "jsonwebtoken";
import configuration from "@/utils/config";

export function generateAccessToken(id: string, role: string) {
  return jwt.sign({ id, role }, configuration.JWT_SECRET_KEY, { expiresIn: "1h" });
}

export function verifyAccessToken(token: string) {
  let result: { valid: true; payload: any } | { valid: false; message: string } | undefined;

  jwt.verify(token, configuration.JWT_SECRET_KEY, (error, decoded) => {
    if (error === null) {
      result = {
        valid: true,
        payload: decoded,
      };
    } else {
      if (error.name === "TokenExpiredError") {
        result = {
          valid: false,
          message: "Token has expired.",
        };
      } else if (error.name === "JsonWebTokenError") {
        result = {
          valid: false,
          message: "Token is invalid.",
        };
      } else if (error.name === "NotBeforeError") {
        result = {
          valid: false,
          message: "Token current time mismatch.",
        };
      }
    }
  });

  if (result === undefined) {
    result = {
      valid: false,
      message: "An unknown error occurred.",
    };
  }

  return result;
}
