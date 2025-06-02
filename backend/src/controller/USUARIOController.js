import { getAllUsuarios, addUsuario, DeleteUsuario, UpdateUsuario,ValidarUsuario} from "../model/USUARIOModel.js"; // Importa funciones del modelo para operaciones CRUD de usuarios

const getAllU = async (req, res) =>{ // Controlador para obtener todos los usuarios
    try {
        const USUARIOS = await getAllUsuarios() // Llama al modelo para obtener usuarios
        res.json(USUARIOS) // Devuelve la lista de usuarios en formato JSON
    } catch (error) {
        res.status(500).json({message: error.message}) // Maneja errores y responde con estado 500
    }
}

const addU = async (req, res) =>{ // Controlador para agregar un nuevo usuario
    try {
       await addUsuario(req.body) // Llama al modelo para agregar usuario con los datos del body
        res.status(201).json({message: 'Usuario creado'}) // Responde con éxito y mensaje
    } catch (error) {
        res.status(500).json({message: error.message}) // Maneja errores y responde con estado 500
    }
}

const DeleteU = async (req, res) =>{ // Controlador para eliminar un usuario
    try {
       await DeleteUsuario(req.params) // Llama al modelo para eliminar usuario usando los parámetros de la ruta
        res.status(201).json({message: 'Usuario eliminado'}) // Responde con éxito y mensaje
    } catch (error) {
        res.status(500).json({message: error.message}) // Maneja errores y responde con estado 500
    }
}

const updateU = async (req, res) => { // Controlador para actualizar un usuario
    try {
        await UpdateUsuario(req.body); // Llama al modelo para actualizar usuario con los datos del body
        res.status(200).json({ message: 'Usuario actualizado' }); // Responde con éxito y mensaje
    } catch (error) {
        res.status(500).json({ message: error.message }); // Maneja errores y responde con estado 500
    }

};

const ValidarU = async (req, res) => { // Controlador para validar un usuario
    try {
        const result = await ValidarUsuario(req.body); // Llama al modelo para validar usuario con los datos del body
        console.log("Resultado de ValidarUsuario:", result);
        if (result.length > 0) { // Si se encuentra el usuario
           res.status(200).json(result[0]); // <--- Envía el usuario completo
        } else {
            res.status(401).json({ message: 'Usuario no válido' }); // Responde con error de autorización
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Maneja errores y responde con estado 500
    }
}

export {getAllU, addU, DeleteU, updateU,ValidarU} // Exporta los controladores para usarlos en las rutas