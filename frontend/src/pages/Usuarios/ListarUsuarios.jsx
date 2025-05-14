import { useState, useEffect } from 'react';
import { ObtenerUsuarios } from '../../services/UsuariosService';
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2';
import axios from 'axios';

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState('');
    const [Usuario, setUsuario] = useState({

        UserName: '',
        PasswordUser: '',
        Email: '',
        PhoneNumber: '',
        AGE: 0
    });

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const respuesta = await ObtenerUsuarios();
            setUsuarios(respuesta);
        } catch (error) {
            console.error("Error al obtener Usuarios: ", error);
            setError(error).message || "Error desconocido";
        }
    };

    const handleChanges = (e) => {
        setUsuario({ ...Usuario, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault() //no se envia por defecto hace que el formulario se ejecute por logica
        console.log(Usuario);
        axios.post('http://localhost:3000/TablaUsuarios', Usuario)
            .then(response => {
                Swal.fire('Exitoso', 'usuario Registrado', 'success')
                setShowModal(false)
                fetchUsuarios()
            })

    }

    const handleDelete = async (UserID) => {
        Swal.fire({
            title: "Estas Seguro?",
            text: "No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/${UserID}`)
                    .then(() => {
                        fetchUsuarios();
                    })
                    .catch((error) => console.error(error));
                Swal.fire({
                    title: "Eliminado!",
                    text: "El usuario ha sido eliminado.",
                    icon: "success"
                });
            }
        });
    };


    return (
        <div className='container'>
            <br />
            <button className="form form-control btn btn p-3" onClick={() => setShowModal(true)}
                style={{
                    height: "45px", // Aumenta la altura para mayor presencia
                    backgroundColor: '#aa9c7c',
                    color: 'white',
                    border: '2px solid #8c7b5e',
                    borderRadius: '8px', // Bordes más redondeados
                    padding: '0 20px', // Más espacio interno
                    display: 'flex', // Habilita flexbox
                    alignItems: 'center', // Centra verticalmente
                    justifyContent: 'center', // Centra horizontalmente
                    fontSize: '18px', // Aumenta el tamaño de la fuente
                    fontWeight: 'bold', // Hace el texto más destacado
                    textAlign: 'center', // Centra el texto
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // Agrega una sombra sutil
                }}
            >Registrar Usuario</button>
            <br />
            <h1 style={{ textAlign: 'center' }}>Lista de usuarios</h1>
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th scope='col'>ID</th>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">Correo Electrónico</th>
                        <th scope="col">Número de Teléfono</th>
                        <th scope='col'>Edad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.UserID} className='text-center'>
                            <td scope="row">{u.UserID}</td>
                            <td scope="row">{u.UserName}</td>
                            <td scope="row">{u.PasswordUser}</td>
                            <td scope="row">{u.Email}</td>
                            <td scope="row">{u.PhoneNumber}</td>
                            <td scope="row">{u.AGE}</td>
                            <td>
                                <button onClick={() => handleDelete(u.UserID)} className='btn btn' style={{
                                    backgroundColor: '#aa9c7c',
                                    color: 'white',
                                    border: '2px solid #8c7b5e',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '8px',

                                    fontWeight: 'bold'
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro de Usuarios</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChanges}
                        name="UserName"
                        placeholder="Nombre"
                        className="form form-control"
                    />
                    <input
                        onChange={handleChanges}
                        name="PasswordUser"
                        placeholder="Contraseña"
                        className="form form-control"
                    />
                    <input
                        onChange={handleChanges}
                        name="Email"
                        placeholder="Email"
                        className="form form-control"
                    />
                    <input
                        onChange={handleChanges}
                        name="PhoneNumber"
                        placeholder="Número de teléfono"
                        className="form form-control"
                    />
                    <input
                        onChange={handleChanges}
                        name="AGE"
                        placeholder="Edad"
                        className="form form-control"
                    />
                    <Modal.Footer>
                        <button
                            className="form form-control btn btn-secondary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="form form-control btn btn-primary"
                            type="submit"
                        >
                            Registrar
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>




        </div>
    );
}