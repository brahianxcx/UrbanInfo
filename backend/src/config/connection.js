// Importa el paquete mssql para conectarse a SQL Server
import sql from 'mssql'
// Importa dotenv para manejar variables de entorno desde un archivo .env
import dotenv from 'dotenv'
// Carga las variables de entorno definidas en el archivo .env
dotenv.config()

// Define el objeto de configuración de la conexión usando variables de entorno
const stringConnection = {
    user : process.env.USER,           // Usuario de la base de datos
    password : process.env.PASSWORD,   // Contraseña del usuario
    server : process.env.SERVER,       // Dirección del servidor SQL
    database : process.env.DATABASE,   // Nombre de la base de datos
    options : {
        trustServerCertificate : true, // Permite certificados autofirmados (útil en desarrollo)
    }
}

// Crea y abre una nueva conexión a la base de datos usando la configuración anterior
const getConnection = new sql.ConnectionPool(stringConnection)
.connect() // Intenta conectarse a la base de datos
.then(pool =>{
    console.log('Conectados a la BD') // Mensaje de éxito en la conexión
    return pool                       // Retorna el pool de conexiones para usar en consultas
})
.catch(err => console.log('Error: ',err)) // Captura y muestra errores de conexión

// Exporta el objeto sql y la función getConnection para usarlos en otros archivos
export {sql, getConnection}