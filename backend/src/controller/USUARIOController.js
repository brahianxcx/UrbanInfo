import { getAllUsuarios } from "../model/USUARIOModel.js";

const getAllU = async (req, res) =>{
       
    
    try {
        const USUARIOS = await getAllUsuarios()
        res.json(USUARIOS)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getAllU}