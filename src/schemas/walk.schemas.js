import { z } from "zod";

export const createWalkSchema = z.object({
  dogName: z.string({
    required_error: "dogName es obligatorio",
  }).min(1, "dogName no puede estar vacío"),

  durationMinutes: z.number({
    required_error: "durationMinutes es obligatorio",
    invalid_type_error: "durationMinutes debe ser un número",
  }).positive("durationMinutes debe ser mayor a 0"),

  date: z.string().optional(),
  distanceKm: z.number().optional(),
  notes: z.string().optional(),
});

export const updateWalkSchema = z.object({
  dogName: z.string().min(1).optional(),
  durationMinutes: z.number().positive().optional(),
  date: z.string().optional(),
  distanceKm: z.number().optional(),
  notes: z.string().optional(),
});