import { getAllU, addU } from "../controller/USUARIOController.js";
import express from 'express'
const router = express.Router()

router.get('/TablaUsuarios', getAllU)
router.post('/register', addU)
export default router