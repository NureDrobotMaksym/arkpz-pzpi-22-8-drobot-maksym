import { Router } from "express";
import { services } from "@/commands/default-command";

export default Router()
  .post("/", async (req, res) => {
    const result = await services.cluster.createCluster(req.body);

    res.json(result);
  })
  .put("/:id", async (req, res) => {
    const result = await services.cluster.updateCluster(req.params.id, req.body);

    res.json(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await services.cluster.deleteCluster(req.params.id);

    res.json(result);
  })
  .get("/", async (req, res) => {
    const result = await services.cluster.getAllClusters();

    res.json(result);
  });
