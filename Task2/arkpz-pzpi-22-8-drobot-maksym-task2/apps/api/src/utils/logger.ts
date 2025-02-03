import { createLogger, format, transports } from "winston";

const consoleFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message }) => {
    return `${level}: ${message}`;
  }),
);

const array = [
  new transports.File({ filename: "error.log", level: "error" }),
  new transports.File({ filename: "combined.log" }),
];

const logger = createLogger({
  level: "info",
  format: format.combine(format.colorize(), format.timestamp(), format.json()),
  transports: [
    new transports.Console({
      format: consoleFormat,
    }),
  ],
});

export default logger;
