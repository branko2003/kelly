import Proyecto from "../models/proyecto.model.js";
import multer from 'multer';
import Patrocinadores from "../models/patrocinador.model.js";  // Asegúrate de importar correctamente el modelo de Patrocinadores


const storage = multer.diskStorage({
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  },
  destination: (req, file, cb) => {
      cb(null, './public');
  },
  
  });

  export const upload = multer({ storage: storage }).fields([
    { name: 'foto', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]);


  export const getProyectos = async (req, res) => {
    try {
      const proyectos = await Proyecto.find().lean();  // Obtén todos los proyectos
  
      // Para cada proyecto, busca los patrocinadores asociados
      for (let proyecto of proyectos) {
        const patrocinadores = await Patrocinadores.find({ proyecto: proyecto._id }).populate('cliente').lean();  // Asegúrate de que 'cliente' sea el campo correcto a poblar
        proyecto.patrocinadores = patrocinadores;  // Asigna los patrocinadores al proyecto
      }
      res.json(proyectos);  // Envía la respuesta con los proyectos y sus patrocinadores
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };
  

  export const getProyectosCliente = async (req, res) => {
    try {
      const reparaciones = await Proyecto.find({cliente: req.params.id }).populate('cliente', 'username')  // 'nombre' es un campo en el documento 'Cliente'
      .populate('tecnico', 'nombre'); // 'nombre' es un campo en el documento 'Tecnico';
      console.log(reparaciones);
      res.json(reparaciones);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };

  export const createProyecto = async (req, res) => {
    try {
      console.log(req.body)
      req.body.foto=req.files.foto[0].originalname
      req.body.video = req.files.video[0].originalname  
      console.log(req.body)
      const {descripcion,costo,foto,video,titulo} = req.body;
      //console.log(JSON.parse(fileNames));  // Muestra los nombres de archivos en la consola
      const newProyecto = new Proyecto({
        descripcion,
        foto,
        video,
        costo,
        titulo
      });
      await newProyecto.save();
      res.json(newProyecto);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };

  export const getReparacion = async (req, res) => {
    try {
      const reparacion = await Proyecto.findById(req.params.id);
      if (!reparacion) return res.status(404).json({ message: "Reparacion no encontrada" });
      return res.json(reparacion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteReparacion = async (req, res) => {
    try {
      const deletedReparacion = await Proyecto.findByIdAndDelete(req.params.id);
      if (!deletedReparacion)
        return res.status(404).json({ message: "Reparacion no encontrada" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const updateReparacion = async (req, res) => {
    try {
      console.log(req.body)
        const {cliente,tecnico, fecha_devolucion,fecha_recepcion,accesorios_dejados,description_problema,garantia,costo,aceptacion_cambios} = req.body;
        const reparacionUpdated = await Proyecto.findOneAndUpdate(
        { _id: req.params.id },
        { cliente,tecnico, fecha_devolucion,fecha_recepcion,accesorios_dejados: JSON.parse(accesorios_dejados),description_problema,garantia,costo,aceptacion_cambios },
        { new: true }
      );
      return res.json(reparacionUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  