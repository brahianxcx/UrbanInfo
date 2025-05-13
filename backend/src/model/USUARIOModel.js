import { sql,getConnection } from "../config/connection.js";

const getAllUsuarios = async ()=>{
    const con = await getConnection
    const result = await con.request().execute('sp_listar_usuarios')
    return result.recordset
}

const addUsuario = async (usuario) => {
    const [UserName, PasswordUser, Email, PhoneNumber] = usuario
    const con = await getConnection()
     await con.request()
    .input('UserName', sql.VarChar(50), UserName)
    .input('PasswordUser', sql.VarChar(50), PasswordUser)
    .input('Email', sql.VarChar(50), Email)
    .input('PhoneNumber', sql.VarChar(50), PhoneNumber)      
    .execute('sp_insertar_usuario')
    return result.recordset
}

export {addUsuario}

export {getAllUsuarios}