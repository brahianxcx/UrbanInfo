import { sql,getConnection } from "../config/connection.js";

const getAllApartamentos = async ()=>{
    const con = await getConnection
    const result = await con.request().execute('sp_listar_apartamentos')
    return result.recordset
}

const UpdateApartamento = async (apartamento) => {
    const { ApartmentID,ApartmentNumber,UserID  } = apartamento;
    const con = await getConnection;
    await con.request()
        .input('ApartmentID', sql.Int, ApartmentID)
        .input('ApartmentNumber', sql.VarChar(50), ApartmentNumber)
        .input('UserID', sql.VarChar(50), UserID)
        
        .execute('sp_actualizar_apartamento');
}



export {getAllApartamentos}