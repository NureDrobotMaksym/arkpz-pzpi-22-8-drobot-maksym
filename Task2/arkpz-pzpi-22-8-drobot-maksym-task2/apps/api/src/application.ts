import configuration from "@/utils/config";
import logger from "@/utils/logger";
import express from "express";
import swagger from "@/middlewares/swagger";
import logging from "@/middlewares/logging";
import rootRouter from "@/routers/root";
import authRouter from "@/routers/authentication";
import userRouter from "@/routers/user";
import lockRouter from "@/routers/lock";
import eventRouter from "@/routers/event";
import clusterRouter from "@/routers/cluster";
import { requireAuth } from "@/middlewares/auth";

export default function () {
  const server = express();

  // Register middlewares

  server.use(express.json());

  if (configuration.NODE_ENV !== "production") {
    server.use(swagger());
  }

  server.use(logging);

  // Register routes

  server.use("/", rootRouter);
  server.use("/auth", authRouter);
  server.use("/user", requireAuth, userRouter);
  server.use("/lock", requireAuth, lockRouter);
  server.use("/event", requireAuth, eventRouter);
  server.use("/cluster", requireAuth, clusterRouter);

  server.use((req: express.Request, res: express.Response) => {
    res.status(404).json({
      status: "failure",
      message: "An unknown route.",
    });
  });

  server.use(
    (error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      logger.error("An unknown error occurred: ", error);

      res.status(500).json({
        status: "failure",
        message: "An unknown error occurred.",
      });
    },
  );

  // Start the server

  return server.listen(configuration.PORT, () => {
    logger.info(`Server started on port ${configuration.PORT}`);
  });
}
