import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/connection.js'
import router from './routes/USUARIORoute.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log(`Conectados al puerto: ${process.env.PORT}`)
    getConnection
})

