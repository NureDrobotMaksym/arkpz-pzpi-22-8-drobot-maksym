import { Router } from "express";
import { services } from "@/commands/default-command";

export default Router()
  .post("/sign-up", async (req, res) => {
    const result = await services.authentication.signUpUser(req.body);

    res.json(result);
  })
  .post("/sign-in", async (req, res) => {
    const result = await services.authentication.signInUser(req.body);

    res.json(result);
  });
