import { Router } from "express";
import { services } from "@/commands/default-command";
import { requireRole } from "@/middlewares/auth";

export default Router()
  .put("/:id", async (req, res) => {
    const result = await services.user.updateUser(req.params.id, req.body);

    res.json(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await services.user.deleteUser(req.params.id);

    res.json(result);
  })
  .get("/", requireRole("admin"), async (req, res) => {
    const result = await services.user.getAllUsers();

    res.json(result);
  });
