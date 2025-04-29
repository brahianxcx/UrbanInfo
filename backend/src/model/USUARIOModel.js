import { getConnection } from "../config/connection.js";

const getAllUsuarios = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM USUARIO')
    return result.recordset
}

export {getAllUsuarios}