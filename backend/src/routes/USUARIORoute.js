import { getAllU } from "../controller/USUARIOController.js";
import express from 'express'
const router = express.Router()

router.get('/TablaUsuarios', getAllU)

export default router