import { Router } from "express";
import { services } from "@/commands/default-command";

export default Router()
  .post("/", async (req, res) => {
    const result = await services.event.createEvent(req.body);

    res.json(result);
  })
  .get("/:id", async (req, res) => {
    const result = await services.event.getEvent(req.params.id);

    res.json(result);
  })
  .get("/lock/:id", async (req, res) => {
    const result = await services.event.getAllEvents(req.params.id);

    res.json(result);
  })