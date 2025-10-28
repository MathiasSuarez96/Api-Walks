import mongoose from "mongoose";
import Walk from "../models/walk.model.js";

export async function getAllWalks(req, res, next) {
  try {
    const walks = await Walk.find().lean().sort({ createdAt: -1 });
    return res.json({ count: walks.length, data: walks });
  } catch (error) {
    next(error);
  }
}

export async function getWalkById(req, res, next) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }
    const walk = await Walk.findById(id).lean();
    if (!walk) {
      return res.status(404).json({ error: "Paseo no encontrado" });
    }
    return res.json({ data: walk });
  } catch (error) {
    next(error);
  }
}

export async function createWalk(req , res , next) {
  try {
    const {dogName , durationMinutes , date , distanceKm , notes} = req.body;
    if (!dogName || !durationMinutes) {
      return res.status(400).json({error: "Los campos de dogName y durationMinutes son obligatorios"});
    }
    const newWalk = await Walk.create({
      dogName,
      durationMinutes,
      date,
      distanceKm,
      notes,
    });
    return res.status(201).json({ message: "Paseo creado" , data: newWalk});
  } catch(error) {
    next(error);
  }
}

export async function updateWalk(req , res , next) {
  try {
    const {id} = req.params;
    const {dogName , durationMinutes , date , distanceKm , notes} = req.body;
    const updatedWalk = await Walk.findByIdAndUpdate(
      id,
      {dogName , durationMinutes , date , distanceKm , notes},
      {new: true , runValidators: true}
    ).lean();

    if (!updatedWalk) {
      return res.status(404).json({error: "Paseo no encontrado"});
    }

    return res.json({message: "Paseo actualizado" , data: updatedWalk});

  } catch (error) {
    next(error);
  }
}

export async function deleteWalk(req, res, next) {
  try {
    const { id } = req.params;
    const deletedWalk = await Walk.findByIdAndDelete(id);

    if (!deletedWalk) {
      return res.status(404).json({ error: "Paseo no encontrado" });
    }

    return res.json({ message: "Paseo eliminado", data: deletedWalk });
  } catch (error) {
    next(error);
  }
}