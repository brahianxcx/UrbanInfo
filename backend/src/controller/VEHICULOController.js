import { getAllVehiculos, addVehiculo, DeleteVehiculo, UpdateVehiculo } from "../model/VEHICULOModel.js";

const getAllV = async (req, res) => {
    try {
        const VEHICULOS= await getAllVehiculos();
        res.json(VEHICULOS);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addV = async (req, res) => {
    try {
        await addVehiculo(req.body);
        res.status(201).json({ message: 'Vehículo registrado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const DeleteV = async (req, res) => {
    try {
        await DeleteVehiculo(req.params);
        res.status(200).json({ message: 'Vehículo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateV = async (req, res) => {
    try {
        await UpdateVehiculo(req.body);
        res.status(200).json({ message: 'Vehículo actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllV, addV, DeleteV, updateV };
