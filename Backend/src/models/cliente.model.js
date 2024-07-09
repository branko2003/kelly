// crea estructura fija esto no da consultas definimos objetos de lo que queremos validar 

import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    apellido: {
        type: String,
        require: true,
        trim: true,
    },

    tarjeta: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    }
},{
    timestamps: true
})

export default mongoose.model('Cliente', clienteSchema)