import filesystem from "node:fs";
import express from "express";
import swagger from "swagger-ui-express";

export default () => {
  const content = filesystem.readFileSync("swagger.json", "utf-8");
  const specification = JSON.parse(content);

  const router = express.Router();

  router.use("/docs", swagger.serve, swagger.setup(specification));

  router.get("/docs.json", (req, res) => {
    res.json(specification);
  });

  return router;
};
