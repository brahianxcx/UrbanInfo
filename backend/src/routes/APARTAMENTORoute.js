import { getAllA } from "../controller/APARTAMENTOController.js";
import express from 'express'
const routerA = express.Router()

routerA.get('/listar-apartamentos', getAllA);


export default routerA;