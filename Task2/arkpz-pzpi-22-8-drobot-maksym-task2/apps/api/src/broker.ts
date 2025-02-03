import mqtt from "mqtt";
import configuration from "@/utils/config";
import logger from "@/utils/logger";
import { services } from "@/commands/default-command";

export default function () {
  const broker = mqtt.connect(configuration.MQTT_BROKER_URL);

  broker.on('connect', () => {
    logger.info("Connected to the MQTT broker.");

    broker.subscribe(configuration.MQTT_BROKER_TOPIC, (error) => {
      if (!error) {
        logger.info("Subscribed to the topic.");
      } else {
        logger.error("Error subscribing to the topic: " + error);
      }
    });
  });

  broker.on("message", async (_, message) => {
    try {
      const payload = JSON.parse(message.toString());

      await services.event.createEvent(payload);

      logger.info("Broker message processed successfully.");
    } catch (error) {
      logger.error("Error while receiving a broker message: " + error);
    }
  });

  return broker;
}