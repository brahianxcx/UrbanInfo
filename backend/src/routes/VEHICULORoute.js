import { getAllV, addV, DeleteV, updateV } from "../controller/VEHICULOController.js";
import express from 'express';
const router = express.Router();

router.get('/TablaVehiculos', getAllV);
router.post('/TablaVehiculos', addV);
router.delete('/TablaVehiculos/:VehicleID', DeleteV);
router.put('/TablaVehiculos/:VehicleID', updateV);

export default router;
