import { getAllApartamentos, UpdateApartamento } from "../model/APARTAMENTOModel.js";


const getAllA = async (req, res) =>{
       
    
    try {
        const APARTAMENTOS = await getAllApartamentos()
        res.json(APARTAMENTOS)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateA = async (req, res) => {
    try {
        await UpdateApartamento(req.body);
        res.status(200).json({ message: 'Apartamento actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {getAllA,updateA}