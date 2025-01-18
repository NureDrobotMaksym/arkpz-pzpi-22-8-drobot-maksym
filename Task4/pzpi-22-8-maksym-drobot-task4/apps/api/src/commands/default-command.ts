import connectDatabase from "@/database";
import connectBroker from "@/broker";
import run from "@/application";
import logger from "@/utils/logger";
import ClusterRepository from "@/repositories/cluster-repository";
import EventRepository from "@/repositories/event-repository";
import LockRepository from "@/repositories/lock-repository";
import UserRepository from "@/repositories/user-repository";
import AuthenticationService from "@/services/authentication-service";
import ClusterService from "@/services/cluster-service";
import EventService from "@/services/event-service";
import LockService from "@/services/lock-service";
import UserService from "@/services/user-service";

const database = connectDatabase();
if (database === null) {
  process.exit(1);
}

export const repositories = {
  cluster: new ClusterRepository(database),
  event: new EventRepository(database),
  lock: new LockRepository(database),
  user: new UserRepository(database),
};

export const services = {
  authentication: new AuthenticationService(repositories.user),
  cluster: new ClusterService(repositories.cluster),
  event: new EventService(repositories.event, repositories.lock),
  lock: new LockService(repositories.lock, repositories.cluster),
  user: new UserService(repositories.user),
};

// Connect to the broker and start the server

const broker = connectBroker();
const application = run();

// Handle termination

const terminate = () => {
  logger.info("Application is shutting down.");

  const shutdown = new Promise<void>((resolve) => {
    application.close(() => {
      database.end();
      broker.end(() => resolve());
    });
  });

  const timeout = new Promise<void>((_, reject) => {
    setTimeout(() => reject(), 10000);
  });

  Promise.race([shutdown, timeout])
    .then(() => logger.info("Application terminated gracefully."))
    .catch((error) => {
      logger.error("Application terminated forcefully: ", error);
      process.exit(1);
    });
};

process.on("SIGHUP", terminate);
process.on("SIGINT", terminate);
process.on("SIGTERM", terminate);
