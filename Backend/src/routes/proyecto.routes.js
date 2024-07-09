import {Router} from 'express'
import { getProyectos, getReparacion, updateReparacion,getProyectosCliente, deleteReparacion, upload, createProyecto } from '../controllers/proyecto.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createReparacionSchema } from '../schemas/proyecto.schema.js'
const router = Router()

router.get('/proyectos',getProyectos);
router.get('/proyectos/cliente/:id',getProyectosCliente);
router.get('/proyectos/:id',getReparacion);
router.post('/proyectos',upload, validateSchema(createReparacionSchema),createProyecto);
router.delete('/proyectos/:id',deleteReparacion);
router.put('/proyectos/:id', upload,updateReparacion);


export default router;