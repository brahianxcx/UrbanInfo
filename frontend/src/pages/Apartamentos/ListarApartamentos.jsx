import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ObtenerApartamentos } from "../../services/ApartamentosService"; // Asegúrate de que la ruta sea correcta

export default function ListarApartamentos() {
    const [apartamentos, setApartamentos] = useState([]);
    const [apartamento, setApartamento] = useState({

        ApartmentNumber: '',
        UserID: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [userIdToEdit, setUserIdToEdit] = useState("");
    
    useEffect(() => {
        fetchApartamentos();
    }, []);

    const fetchApartamentos = async () => {
        try {
            const respuesta = await ObtenerApartamentos();
            console.log(respuesta);
            setApartamentos(respuesta);
        } catch (error) {
            console.error("Error al obtener apartamentos: ", error);
            Swal.fire("Error", "No se pudieron obtener los apartamentos", "error");
        }
    };

    const handleChanges = (a) => {
        setApartamentos({ ...apartamento, [a.target.name]: a.target.value });
    };
    const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    try {
        await axios.post('http://localhost:3000/Tabla-apartamentos', apartamento);
        Swal.fire('Exitoso', 'Apartamento Registrado', 'success');
        setShowModal(false);
        fetchApartamentos(); // Actualiza la lista de apartamentos
    } catch (error) {
        console.error('Error al registrar apartamento:', error);
        Swal.fire('Error', 'No se pudo registrar el apartamento', 'error');
    }
};

    const handleEditar = (a) => {
        a.preventDefault();
        if (!apartamento.ApartmentID) {
            Swal.fire('Error', 'No hay ID de usuario para editar.', 'error');
            return;
        }
        console.log("Apartamento a actualizar:", apartamento);
        axios.put('http://localhost:3000/listar-apartamentos/${apartamento.ApartmentID}', apartamento)
            .then(response => {
                Swal.fire('Actualizado', 'Apartamento actualizado correctamente', 'success');
                setShowModal(false);
                fetchUsuarios();
                resetFormulario();
            })
            .catch(error => {
                console.error('Error al actualizar:', error);
                Swal.fire('Error', 'No se pudo actualizar el apartamento', 'error');
            });
    };



    const handleDelete = async (ApartmentID) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, elimínalo"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/${ApartmentID}`);
                fetchApartamentos(); // Actualiza la lista de apartamentos
                Swal.fire("Eliminado", "El apartamento ha sido eliminado.", "success");
            } catch (error) {
                console.error('Error al eliminar apartamento:', error);
                Swal.fire("Error", "No se pudo eliminar el apartamento.", "error");
            }
        }
    });
};

    const buscarApartamentoPorId = () => {
        const encontrado = apartamentos.find(a => a.ApartmentID === parseInt(userIdToEdit));
        if (encontrado) {
            setApartamento(encontrado);
            setShowModal(true);
        } else {
            Swal.fire('No encontrado', 'No se encontró un apartamento con ese ID', 'warning');
        }
    };



    const resetFormulario = () => {
        setApartamento({
            ApartmentNumber: '',
            UserID: ''
        });
    };




    return (
        <div className="container">
            <br />
            <button
                className="form form-control btn btn p-3"
                onClick={() => {
                    setApartamento({
                        ApartmentNumber: '',
                        UserID: ''
                    });
                    setShowModal(true);
                }}
                style={{
                    height: "45px",
                    backgroundColor: '#aa9c7c',
                    color: 'white',
                    border: '2px solid #8c7b5e',
                    borderRadius: '8px',
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            >Registrar Apartamento</button>
            <br />
            <div className='my-4 p-3 border rounded shadow-sm' style={{ backgroundColor: '#f9f6f1' }}>
                <h5 className='mb-3 text-center'>Editar apartamento por ID</h5>
                <div className='d-flex gap-2 justify-content-center'>
                    <input
                        type='number'
                        className='form-control w-25'
                        placeholder='Ingrese ID del apartamento'
                        value={userIdToEdit}
                        onChange={(a) => setUserIdToEdit(a.target.value)}
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
                        onClick={buscarApartamentoPorId}
                    >
                        Buscar y Editar
                    </button>
                </div>
            </div>
            <br />
            <h1 style={{ textAlign: 'center' }}>Lista de Apartamentos</h1>
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th scope="col">ID</th>
                        <th scope="col">Número de Apartamento</th>
                        <th scope="col">ID de Usuario</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {apartamentos.map((a) => (
                        <tr key={a.ApartmentID} className="text-center">
                            <td>{a.ApartmentID}</td>
                            <td>{a.ApartmentNumber}</td>
                            <td>{a.UserID}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(a.ApartmentID)}
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
        </div>
    );
}