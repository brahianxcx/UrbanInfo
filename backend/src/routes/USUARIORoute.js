import { getAllU, addU, DeleteU, updateU } from "../controller/USUARIOController.js";
import express from 'express'
const router = express.Router()

router.get('/TablaUsuarios', getAllU)
router.post('/TablaUsuarios', addU)
router.post('/register', addU)
router.delete('/:UserID', DeleteU)
router.put('/TablaUsuarios/:UserID', updateU); 

export default router