import { z } from "zod";

export const createPatrocinadorSchema = z.object({
  cliente: z.string({
    required_error: "Requerido",
  }),
  proyecto: z.string({
    required_error: "Requerido",
  }),
  monto: z
    .string({
      required_error: "monto requerido",
    }),
  });