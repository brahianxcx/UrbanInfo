import { getAllU } from "../controller/USUARIOController.js";
import express from 'express'
const router = express.Router()

router.get('/', getAllU)

export default router