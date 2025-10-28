import { Router } from "express";
import {
  getAllWalks,
  getWalkById,
  createWalk,
  updateWalk,
  deleteWalk,
} from "../controllers/walk.controllers.js";
import auth from "../middlewares/auth.js";
import validate from "../middlewares/validate.js";
import {
  createWalkSchema,
  updateWalkSchema,
} from "../schemas/walk.schemas.js";

const walksRouter = Router();

walksRouter.get("/", getAllWalks);
walksRouter.get("/:id", getWalkById);

walksRouter.post("/", auth, validate(createWalkSchema), createWalk);
walksRouter.put("/:id", auth, validate(updateWalkSchema), updateWalk);
walksRouter.delete("/:id", auth, deleteWalk);

export default walksRouter;