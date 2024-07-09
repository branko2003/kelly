import {Router} from 'express'
import { getClientes, getCliente, updateCliente, deleteCliente,createCliente } from '../controllers/cliente.controller.js'
import { registerSchema } from '../schemas/cliente.shema.js'
import { validateSchema } from '../middlewares/validator.middleware.js'

const router = Router()

router.post('/clientes', validateSchema(registerSchema),createCliente);
router.get('/clientes',getClientes);
router.get('/clientes/:id' ,getCliente);
router.delete('/clientes/:id' ,deleteCliente);
router.put('/clientes/:id', updateCliente);
export default router;