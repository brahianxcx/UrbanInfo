import { getAllApartamentos } from "../model/APARTAMENTOModel.js";


const getAllA = async (req, res) =>{
       
    
    try {
        const APARTAMENTOS = await getAllApartamentos()
        res.json(APARTAMENTOS)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export {getAllA}