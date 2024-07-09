import {Router} from 'express'
import { getProyectos, getReparacion, updateReparacion,getProyectosCliente, deleteReparacion, upload, createProyecto } from '../controllers/proyecto.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createReparacionSchema } from '../schemas/proyecto.schema.js'
const router = Router()

router.get('/reparaciones',getProyectos);
router.get('/reparaciones/cliente/:id',getProyectosCliente);
router.get('/reparaciones/:id',getReparacion);
router.post('/reparaciones',upload, validateSchema(createReparacionSchema),createProyecto);
router.delete('/reparaciones/:id',deleteReparacion);
router.put('/reparaciones/:id', upload,updateReparacion);


export default router;