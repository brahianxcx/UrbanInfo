import { sql, getConnection } from "../config/connection.js"; // Importa SQL y la función para obtener la conexión a la base de datos

const getAllUsuarios = async () => { // Obtiene todos los usuarios de la base de datos
    const con = await getConnection; // Obtiene la conexión
    const result = await con.request().execute('sp_listar_usuarios'); // Ejecuta el procedimiento almacenado para listar usuarios
    return result.recordset; // Retorna el conjunto de registros obtenidos
}

const addUsuario = async (usuario) => { // Agrega un nuevo usuario a la base de datos
    const { UserName, PasswordUser, Email, PhoneNumber, AGE } = usuario; // Desestructura los datos del usuario
    const con = await getConnection; // Obtiene la conexión
    await con.request()
        .input('UserName', sql.VarChar(50), UserName) // Agrega el parámetro UserName
        .input('PasswordUser', sql.VarChar(50), PasswordUser) // Agrega el parámetro PasswordUser
        .input('Email', sql.VarChar(50), Email) // Agrega el parámetro Email
        .input('PhoneNumber', sql.VarChar(50), PhoneNumber) // Agrega el parámetro PhoneNumber
        .input('AGE', sql.Int, AGE) // Agrega el parámetro AGE
        .execute('InsertarUsuario '); // Ejecuta el procedimiento almacenado para insertar usuario
}

const DeleteUsuario = async (usuario) => { // Elimina un usuario de la base de datos
    const { UserID } = usuario; // Desestructura el ID del usuario
    const con = await getConnection; // Obtiene la conexión
    const result = await con.request()
        .input('UserID', sql.Int, UserID) // Agrega el parámetro UserID
        .execute('sp_eliminar_usuario'); // Ejecuta el procedimiento almacenado para eliminar usuario
    return result.recordset; // Retorna el resultado de la eliminación
}

const UpdateUsuario = async (usuario) => { // Actualiza los datos de un usuario en la base de datos
    const { UserID, UserName, PasswordUser, Email, PhoneNumber, AGE } = usuario; // Desestructura los datos del usuario
    const con = await getConnection; // Obtiene la conexión
    await con.request()
        .input('UserID', sql.Int, UserID) // Agrega el parámetro UserID
        .input('UserName', sql.VarChar(50), UserName) // Agrega el parámetro UserName
        .input('PasswordUser', sql.VarChar(50), PasswordUser) // Agrega el parámetro PasswordUser
        .input('Email', sql.VarChar(50), Email) // Agrega el parámetro Email
        .input('PhoneNumber', sql.VarChar(50), PhoneNumber) // Agrega el parámetro PhoneNumber
        .input('AGE', sql.Int, AGE) // Agrega el parámetro AGE
        .execute('sp_actualizar_usuario'); // Ejecuta el procedimiento almacenado para actualizar usuario
}

const ValidarUsuario = async (usuario) => {
    const { UserName, PasswordUser } = usuario;
    const con = await getConnection;
    console.log("Parámetros recibidos en el modelo:", UserName, PasswordUser); // <-- AGREGA ESTO
    const result = await con.request()
        .input('UserName', sql.VarChar(50), UserName)
        .input('PasswordUser', sql.VarChar(50), PasswordUser)
        .execute('ValidarUsuario');
    console.log("Resultado SQL:", result.recordset); // <-- Y ESTO
    return result.recordset;
}

// Exporta las funciones para usarlas en otros archivos
export { addUsuario }
export { DeleteUsuario }
export { getAllUsuarios }
export { UpdateUsuario }
export { ValidarUsuario }