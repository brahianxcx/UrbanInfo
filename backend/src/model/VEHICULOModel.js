import { sql, getConnection } from "../config/connection.js";

const getAllVehiculos = async () => {
    const con = await getConnection;
    const result = await con.request().execute('sp_listar_vehiculos');
    return result.recordset;
}

const addVehiculo = async (vehiculo) => {
    const { PlateNumber, Model, UserID } = vehiculo; 
    const con = await getConnection;
    await con.request()
        .input('PlateNumber', sql.VarChar(20), PlateNumber)
        .input('Model', sql.VarChar(25), Model)
        .input('UserID', sql.Int, UserID)
        .execute('sp_insertar_vehiculo');
}

const DeleteVehiculo = async ({ VehicleID }) => {
    const con = await getConnection;
    const result = await con.request()
        .input('VehicleID', sql.Int, VehicleID)
        .execute('sp_eliminar_vehiculo');
    return result.recordset;
}

const UpdateVehiculo = async (vehiculo) => {
   const { VehicleID, PlateNumber, Model, UserID } = vehiculo;
    const con = await getConnection;
    await con.request()
        .input('VehicleID', sql.Int, VehicleID)
        .input('PlateNumber', sql.VarChar(20), PlateNumber)
        .input('Model', sql.VarChar(25), Model)
        .input('UserID', sql.Int, UserID)
        .execute('sp_actualizar_vehiculo');
}

export { getAllVehiculos, addVehiculo, DeleteVehiculo, UpdateVehiculo };
