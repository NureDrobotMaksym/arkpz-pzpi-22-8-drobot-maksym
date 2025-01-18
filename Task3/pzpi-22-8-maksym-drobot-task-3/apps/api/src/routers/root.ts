import { Router } from "express";

export default Router().get("/", (_, res) => {
  res.json({ status: "success", message: "healthy" })
});
