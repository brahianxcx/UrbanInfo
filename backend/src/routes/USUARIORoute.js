import { getAllU, addU, DeleteU, updateU, ValidarU } from "../controller/USUARIOController.js"; // Importa los controladores para operaciones CRUD de usuarios
import express from 'express' // Importa Express para crear el router
const router = express.Router() // Crea una instancia de router de Express

router.get('/TablaUsuarios', getAllU) // Ruta para obtener todos los usuarios
router.post('/TablaUsuarios', addU) // Ruta para agregar un nuevo usuario
router.post('/register', addU) // Ruta alternativa para registrar usuario (puede usarse para registro desde frontend)
router.delete('/TablaUsuarios/:UserID', DeleteU) // Ruta para eliminar un usuario por su ID
router.put('/TablaUsuarios/:UserID', updateU); // Ruta para actualizar un usuario por su ID
router.post('/login', ValidarU) // Ruta para validar usuario (puede usarse para login desde frontend)
export default router // Exporta el router para usarlo en el archivo principal del backend