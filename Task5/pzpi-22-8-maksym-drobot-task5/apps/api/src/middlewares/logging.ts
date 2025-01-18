import morgan from "morgan";
import logger from "@/utils/logger";

export default morgan(":method :url :status :response-time ms", {
  stream: {
    write(message) {
      const parts = message.split(" ");

      const log = {
        method: parts[0],
        url: parts[1],
        status: parts[2],
        responseTime: parts[3],
      };

      logger.info(JSON.stringify(log));
    },
  },
});
