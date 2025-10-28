import { Router } from "express";
import walksRouter from "./walks.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ ok: true });
});

router.use("/walks", walksRouter);
router.use("/auth", authRouter);

export default router;
