// noinspection ES6UnusedImports

import { Request } from "express";

declare module "express" {
  export interface Request {
    user?: {
      id: number;
      role: "user" | "admin";
    };
  }
}
