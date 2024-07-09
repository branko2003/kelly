import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "Requerido",
  }),
  apellido: z.string({
    required_error: "Requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no valido",
    }),
  tarjeta: z
    .string({
      required_error: "tarjeta requerida",
    })
    .min(13, {
      message: "Introduzca una tarjeta valida",
    }),

});
