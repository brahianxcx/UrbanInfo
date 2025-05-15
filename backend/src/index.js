// Importa el framework Express para crear el servidor y manejar rutas
import express from 'express'

// Importa CORS para permitir peticiones de diferentes orígenes (Cross-Origin Resource Sharing)
import cors from 'cors'

// Importa dotenv para cargar variables de entorno desde un archivo .env
import dotenv from 'dotenv'

// Importa la función para establecer la conexión a la base de datos
import { getConnection } from './config/connection.js'

// Importa las rutas relacionadas con usuarios
import router from './routes/USUARIORoute.js'

// Importa las rutas relacionadas con apartamentos
import routerA from './routes/APARTAMENTORoute.js'

// Crea una instancia de la aplicación Express
const app = express()

// Carga las variables de entorno definidas en el archivo .env
dotenv.config()

// Habilita CORS para permitir solicitudes desde otros dominios
app.use(cors())

// Permite que el servidor acepte y procese datos en formato JSON
app.use(express.json())

// Usa las rutas de usuario en la raíz del servidor (ej: /login, /TablaUsuarios, etc.)
app.use('/', router)

// Usa las rutas de apartamentos bajo el prefijo /apartamentos (ej: /apartamentos/listar-apartamentos)
//app.use('/apartamentos', routerA)

// Inicia el servidor en el puerto definido en las variables de entorno y muestra un mensaje en consola
app.listen(process.env.PORT, () => {
    console.log(`Conectados al puerto: ${process.env.PORT}`)
    // Llama a la función para establecer la conexión a la base de datos (aunque aquí falta el paréntesis para ejecutarla)
    getConnection
})