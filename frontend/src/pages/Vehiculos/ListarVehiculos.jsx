import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function ListarVehiculos() {
    const [cantidadRegistros, setCantidadRegistros] = useState(10);
    const [filtro, setFiltro] = useState('');
    const [vehiculos, setVehiculos] = useState([]);
    const [error, setError] = useState('');
    const [Vehiculo, setVehiculo] = useState({
        VehicleID: '',
        PlateNumber: '',
        Model: '',
        UserID: 0
    });
    const [showModal, setShowModal] = useState(false);
    const [vehicleIdToEdit, setVehicleIdToEdit] = useState('');

    useEffect(() => {
        fetchVehiculos();
    }, []);

    const fetchVehiculos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/vehiculos/TablaVehiculos');
            setVehiculos(response.data);
        } catch (error) {
            console.error("Error al obtener vehículos: ", error);
            setError(error.message || "Error desconocido");
        }
    };

    const handleChanges = (e) => {
        setVehiculo({ ...Vehiculo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/vehiculos/TablaVehiculos', Vehiculo)
            .then(response => {
                Swal.fire('Éxito', 'Vehículo registrado correctamente', 'success');
                setShowModal(false);
                fetchVehiculos();
                resetFormulario();
            })
            .catch(error => {
                console.error('Error al registrar vehículo:', error);
                Swal.fire('Error', 'No se pudo registrar el vehículo', 'error');
            });
    };

    const handleEditar = (e) => {
        e.preventDefault();
        if (!Vehiculo.VehicleID) {
            Swal.fire('Error', 'No hay ID de vehículo para editar.', 'error');
            return;
        }
        axios.put(`http://localhost:3000/vehiculos/TablaVehiculos/${Vehiculo.VehicleID}`, Vehiculo)
            .then(response => {
                Swal.fire('Actualizado', 'Vehículo actualizado correctamente', 'success');
                setShowModal(false);
                fetchVehiculos();
                resetFormulario();
            })
            .catch(error => {
                console.error('Error al actualizar vehículo:', error);
                Swal.fire('Error', 'No se pudo actualizar el vehículo', 'error');
            });
    };

    const handleDelete = async (VehicleID) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/vehiculos/TablaVehiculos/${VehicleID}`);
                    Swal.fire("Eliminado", "El vehículo ha sido eliminado.", "success");
                    await fetchVehiculos();
                } catch (error) {
                    console.error('Error al eliminar vehículo:', error);
                    Swal.fire("Error", "No se pudo eliminar el vehículo", "error");
                }
            }
        });
    };

    const buscarVehiculoPorId = () => {
        const encontrado = vehiculos.find(v => v.VehicleID === parseInt(vehicleIdToEdit));
        if (encontrado) {
            setVehiculo(encontrado);
            setShowModal(true);
        } else {
            Swal.fire('No encontrado', 'No se encontró un vehículo con ese ID', 'warning');
        }
    };

    const resetFormulario = () => {
        setVehiculo({
            VehicleID: '',
            PlateNumber: '',
            Model: '',
            UserID: 0
        });
    };

    return (
        <div className='container'>
            <br />
            <button
                className="form form-control btn p-3"
                onClick={() => {
                    resetFormulario();
                    setShowModal(true);
                }}
                style={{
                    height: "45px",
                    backgroundColor: '#aa9c7c',
                    color: 'white',
                    border: '2px solid #8c7b5e',
                    borderRadius: '8px',
                    padding: '0 20px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            >Registrar Vehículo</button>

            {/* Buscar para editar */}
            <div className='my-4 p-3 border rounded shadow-sm' style={{ backgroundColor: '#f9f6f1' }}>
                <h5 className='mb-3 text-center'>Editar vehículo por ID</h5>
                <div className='d-flex gap-2 justify-content-center'>
                    <input
                        type='number'
                        className='form-control w-25'
                        placeholder='Ingrese ID del vehículo'
                        value={vehicleIdToEdit}
                        onChange={(e) => setVehicleIdToEdit(e.target.value)}
                    />
                    <button
                        className='btn'
                        style={{
                            backgroundColor: '#aa9c7c',
                            color: 'white',
                            border: '2px solid #8c7b5e',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}
                        onClick={buscarVehiculoPorId}
                    >
                        Buscar y Editar
                    </button>
                </div>
            </div>

            <div className="mb-4 text-center">
                <input
                    type="text"
                    className="form-control w-50 d-inline-block"
                    placeholder="Buscar por placa o modelo..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2 mb-3 w-75 mx-auto">
                <label><strong>Mostrar:</strong></label>
                <select
                    className="form-select w-auto"
                    value={cantidadRegistros}
                    onChange={(e) => setCantidadRegistros(parseInt(e.target.value))}
                    style={{ border: '2px solid #8c7b5e', backgroundColor: '#f9f6f1' }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={vehiculos.length}>Todos</option>
                </select>
            </div>

            <h1 className="text-center">Lista de Vehículos</h1>
            <table className="table table-striped">
                <thead className='text-center'>
                    <tr>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>UserID</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {vehiculos
                        .filter(v =>
                            v.PlateNumber.toLowerCase().includes(filtro.toLowerCase()) ||
                            v.Model.toLowerCase().includes(filtro.toLowerCase())
                        )
                        .slice(0, cantidadRegistros)
                        .map(v => (
                            <tr key={v.VehicleID}>
                                <td>{v.VehicleID}</td>
                                <td>{v.PlateNumber}</td>
                                <td>{v.Model}</td>
                                <td>{v.UserID}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(v.VehicleID)}
                                        className='btn btn'
                                        style={{
                                            backgroundColor: '#aa9c7c',
                                            color: 'white',
                                            border: '2px solid #8c7b5e',
                                            padding: '10px',
                                            fontSize: '16px',
                                            borderRadius: '8px',
                                            fontWeight: 'bold'
                                        }}
                                    >Eliminar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{Vehiculo.VehicleID ? 'Editar Vehículo' : 'Registrar Vehículo'}</Modal.Title>
                </Modal.Header>
                <form onSubmit={Vehiculo.VehicleID ? handleEditar : handleSubmit}>
                    <div className="p-3">
                        <input
                            name="PlateNumber"
                            placeholder="Placa"
                            className="form-control mb-2"
                            value={Vehiculo.PlateNumber}
                            onChange={handleChanges}
                            required
                        />
                        <input
                            name="Model"
                            placeholder="Modelo"
                            className="form-control mb-2"
                            value={Vehiculo.Model}
                            onChange={handleChanges}
                            required
                        />
                        <input
                            name="UserID"
                            type="number"
                            placeholder="UserID"
                            className="form-control"
                            value={Vehiculo.UserID}
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                                Swal.fire({
                                    icon: 'info',
                                    title: 'Cancelado',
                                    text: 'Operación cancelada',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setShowModal(false);
                                resetFormulario();
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Guardar
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}
