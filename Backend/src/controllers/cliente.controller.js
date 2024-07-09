import User from "../models/cliente.model.js";
import Patrocinadores from "../models/patrocinador.model.js";  // Asegúrate de importar correctamente el modelo de Patrocinadores



export const createCliente = async (req, res) => {
  try {
    console.log(req.body)
    const {nombre,apellido, tarjeta, email,proyecto,monto } = req.body;
    //console.log(JSON.parse(fileNames));  // Muestra los nombres de archivos en la consola
    const newCliente = new User({
      nombre,
      apellido,
      tarjeta,
      email,
    });
    await newCliente.save();

    const newPatrocinador = new Patrocinadores({
      cliente: newCliente._id,
      proyecto,
      monto,
    });
    await newPatrocinador.save();

    res.json(newCliente);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};



export const getClientes = async (req, res) => {
    try {
      const clientes = await User.find();
      res.json(clientes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const getCliente = async (req, res) => {
    try {
      const cliente = await User.findById(req.params.id);
      if (!cliente) return res.status(404).json({ message: "cliente no encontrado" });
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteCliente = async (req, res) => {
    try {
      const deletedCliente = await User.findByIdAndDelete(req.params.id);
      if (!deletedCliente)
        return res.status(404).json({ message: "Cliente no encontrado" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const updateCliente = async (req, res) => {
    try {
      const {nombre,apellido, tarjeta, email } = req.body;
      const clienteUpdated = await User.findOneAndUpdate(
        { _id: req.params.id },
        { nombre,
          apellido,
            email,
            tarjeta },
        { new: true }
      );
      return res.json(clienteUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
