import mongoose from "mongoose";

const patrocinadorSchema = new mongoose.Schema(
    {
      cliente: {
        type: mongoose.Types.ObjectId,
        ref: "Cliente",
        required: true
      },
      proyecto: {
        type: mongoose.Types.ObjectId,
        ref: "Proyecto",
        required: true
      },
      monto: {
        type: Number,
        require: true,
        trim: true,
    },
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("Patrocinadores", patrocinadorSchema);