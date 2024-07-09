import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema(
    {
      titulo: {
        type: String,
        required: true,
      },
      video: {
        type: String,
        required: true,
      },
      descripcion: {
        type: String,
        required: true,
      },
      costo: {
        type: Number,
        required: true,
      },
      foto: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("Proyecto", proyectoSchema);