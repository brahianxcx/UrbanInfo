import { useState, useEffect } from 'react'; // Importa hooks de React para manejar estado y ciclos de vida
import { ObtenerUsuarios } from '../../services/UsuariosService'; // Importa función para obtener usuarios desde el backend
import { Modal } from "react-bootstrap"; // Importa componente Modal de Bootstrap para ventanas emergentes
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas bonitas
import axios from 'axios'; // Importa axios para hacer peticiones HTTP

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar la lista de usuarios
    const [error, setError] = useState(''); // Estado para manejar mensajes de error
    const [Usuario, setUsuario] = useState({ // Estado para el usuario actual (crear/editar)
        UserID: '',
        UserName: '',
        PasswordUser: '',
        Email: '',
        PhoneNumber: 0,
        AGE: 0
    });
    const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
    const [userIdToEdit, setUserIdToEdit] = useState(''); // Estado para almacenar el ID a editar

    useEffect(() => {
        fetchUsuarios(); // Al montar el componente, obtiene la lista de usuarios
    }, []);

    const fetchUsuarios = async () => { // Función para obtener usuarios del backend
        try {
            const respuesta = await ObtenerUsuarios();
            setUsuarios(respuesta);
        } catch (error) {
            console.error("Error al obtener Usuarios: ", error);
            setError(error.message || "Error desconocido");
        }
    };

    const handleChanges = (e) => { // Maneja cambios en los inputs del formulario
        setUsuario({ ...Usuario, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => { // Maneja el registro de un nuevo usuario
        e.preventDefault(); // Evita el envío por defecto del formulario
        console.log(Usuario);
        axios.post('http://localhost:3000/TablaUsuarios', Usuario)
            .then(response => {
                Swal.fire('Exitoso', 'usuario Registrado', 'success')
                setShowModal(false)
                fetchUsuarios()
                resetFormulario();
            })
    }

    const handleEditar = (e) => { // Maneja la edición de un usuario existente
        e.preventDefault();
        if (!Usuario.UserID) {
            Swal.fire('Error', 'No hay ID de usuario para editar.', 'error');
            return;
        }
        console.log("Usuario a actualizar:", Usuario);
        axios.put(`http://localhost:3000/TablaUsuarios/${Usuario.UserID}`, Usuario)
            .then(response => {
                Swal.fire('Actualizado', 'Usuario actualizado correctamente', 'success');
                setShowModal(false);
                fetchUsuarios();
                resetFormulario();
            })
            .catch(error => {
                console.error('Error al actualizar:', error);
                Swal.fire('Error', 'No se pudo actualizar el usuario', 'error');
            });
    };

    const handleDelete = async (UserID) => { // Maneja la eliminación de un usuario
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ID a eliminar:", UserID);
                axios.delete(`http://localhost:3000/TablaUsuarios/${UserID}`)
                    .then(() => {
                        fetchUsuarios();
                    })
                    .catch((error) => console.error(error));
                Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
            }
        });
    };

    const buscarUsuarioPorId = () => { // Busca un usuario por su ID para editarlo
        const encontrado = usuarios.find(u => u.UserID === parseInt(userIdToEdit));
        if (encontrado) {
            setUsuario(encontrado);
            setShowModal(true);
        } else {
            Swal.fire('No encontrado', 'No se encontró un usuario con ese ID', 'warning');
        }
    };

    const resetFormulario = () => { // Limpia el formulario de usuario
        setUsuario({
            UserID: '',
            UserName: '',
            PasswordUser: '',
            Email: '',
            PhoneNumber: 0,
            AGE: 0
        });
    };

    return (
        <div className='container'>
            <br />
            <button
                className="form form-control btn btn p-3"
                onClick={() => {
                    setUsuario({
                        UserID: '',
                        UserName: '',
                        PasswordUser: '',
                        Email: '',
                        PhoneNumber: 0,
                        AGE: 0
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
            >Registrar Usuario</button>

            {/* CAMPO PARA EDITAR POR ID */}
            <div className='my-4 p-3 border rounded shadow-sm' style={{ backgroundColor: '#f9f6f1' }}>
                <h5 className='mb-3 text-center'>Editar usuario por ID</h5>
                <div className='d-flex gap-2 justify-content-center'>
                    <input
                        type='number'
                        className='form-control w-25'
                        placeholder='Ingrese ID del usuario'
                        value={userIdToEdit}
                        onChange={(e) => setUserIdToEdit(e.target.value)}
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
                        onClick={buscarUsuarioPorId}
                    >
                        Buscar y Editar
                    </button>
                </div>
            </div>

            <h1 style={{ textAlign: 'center' }}>Lista de usuarios</h1>
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Contraseña</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.UserID} className='text-center'>
                            <td>{u.UserID}</td>
                            <td>{u.UserName}</td>
                            <td>{u.PasswordUser}</td>
                            <td>{u.Email}</td>
                            <td>{u.PhoneNumber}</td>
                            <td>{u.AGE}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(u.UserID)}
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
                    <Modal.Title>{Usuario.UserID ? 'Editar Usuario' : 'Registro de Usuario'}</Modal.Title>
                </Modal.Header>
                <form onSubmit={Usuario.UserID ? handleEditar : handleSubmit}>
                    <input
                        onChange={handleChanges}
                        name="UserName"
                        value={Usuario.UserName}
                        placeholder="Nombre"
                        className="form form-control" required
                    />
                    <input
                        onChange={handleChanges}
                        name="PasswordUser"
                        value={Usuario.PasswordUser}
                        placeholder="Contraseña"
                        className="form form-control" required
                    />
                    <input
                        onChange={handleChanges}
                        name="Email"
                        value={Usuario.Email}
                        placeholder="Email"
                        className="form form-control" required
                    />
                    <input
                        onChange={handleChanges}
                        name="PhoneNumber"
                        value={Usuario.PhoneNumber}
                        placeholder="Teléfono"
                        className="form form-control" required
                    />
                    <input
                        onChange={handleChanges}
                        name="AGE"
                        value={Usuario.AGE}
                        placeholder="Edad"
                        className="form form-control" required
                    />
                    <Modal.Footer>
                        <button
                            type="button"
                            className=" form form-control btn btn-secondary"
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
                            type="button"
                            className="form form-control btn btn-primary"
                            onClick={(e) => {
                                if (Usuario.UserID) {
                                    handleEditar(e);
                                } else {
                                    handleSubmit(e);
                                }
                            }}
                        >
                            Guardar
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}