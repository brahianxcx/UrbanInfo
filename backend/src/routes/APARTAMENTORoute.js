import { getAllA,updateA } from "../controller/APARTAMENTOController.js";
import express from 'express'
const routerA = express.Router()

routerA.get('/listar-apartamentos', getAllA);
routerA.put('/listar-apartamentos/:ApartmentID', updateA); 


export default routerA;