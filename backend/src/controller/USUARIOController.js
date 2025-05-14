import { getAllUsuarios, addUsuario, DeleteUsuario } from "../model/USUARIOModel.js";

const getAllU = async (req, res) =>{
       
    
    try {
        const USUARIOS = await getAllUsuarios()
        res.json(USUARIOS)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const addU = async (req, res) =>{
   
    try {
       await addUsuario(req.body)
        res.status(201).json({message: 'Usuario creado'})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const DeleteU = async (req, res) =>{
   
    try {
       await DeleteUsuario(req.params)
        res.status(201).json({message: 'Usuario eliminado'})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export {getAllU, addU, DeleteU}