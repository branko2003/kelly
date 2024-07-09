import { z } from "zod";

export const createReparacionSchema = z.object({
  titulo: z.string().optional(),

  video: z.string().optional(),
  descripcion: z.string().optional(),
  costo: z.string().optional().transform((num) => parseInt(num)),
  //fotos: z.array(z.string()).optional(),
  foto: z.string().optional().transform((str) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      return [];  // Devuelve un array vacío si hay un error al parsear
    }}),
  });