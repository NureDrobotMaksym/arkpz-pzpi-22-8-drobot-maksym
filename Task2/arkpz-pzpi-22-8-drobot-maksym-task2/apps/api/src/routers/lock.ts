import { Router } from "express";
import { services } from "@/commands/default-command";

export default Router()
  .post("/", async (req, res) => {
    const result = await services.lock.createLock(req.body);

    res.json(result);
  })
  .put("/:id", async (req, res) => {
    const result = await services.lock.updateLock(req.params.id, req.body);

    res.json(result);
  })
  .get("/:id", async (req, res) => {
    const result = await services.lock.getLock(req.params.id);

    res.json(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await services.lock.deleteLock(req.params.id);

    res.json(result);
  })
  .get("/cluster/:id", async (req, res) => {
    const result = await services.lock.getAllLocks(req.params.id);

    res.json(result);
  })