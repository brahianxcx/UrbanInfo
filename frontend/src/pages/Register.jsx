import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import backgroundImage from "/fondo-login2.jpg"; 
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [Usuario, setUsuario] = useState({
    UserName: '',
    PasswordUser: '',
    Email: '',
    PhoneNumber: '',
    AGE: 0
  });

  const handleChanges = (e) => {
    setUsuario({ ...Usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Usuario);
    axios.post('http://localhost:3000/register', Usuario)
      .then(response => {
        Swal.fire('Exitoso', 'Usuario Registrado', 'success');
        navigate('/login'); // Redirige a la página de inicio de sesión
      })
      .catch(error => {
        console.error(error);
        Swal.fire('Error', 'Hubo un problema al registrar al usuario', 'error');
      });
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="p-4 rounded shadow-lg" style={{ backgroundColor: '#ffffff', width: '320px' }}>
          <h2 className="text-center mb-4" style={{ color: '#333333', fontWeight: 'bold' }}>
            Registro
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Campos de entrada */}
            <div className="mb-3">
              <input
                type="text"
                name="UserName"
                placeholder="Nombre de Usuario"
                className="form-control"
                value={Usuario.UserName}
                onChange={handleChanges}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="Email"
                placeholder="Correo Electrónico"
                className="form-control"
                value={Usuario.Email}
                onChange={handleChanges}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="PasswordUser"
                placeholder="Contraseña"
                className="form-control"
                value={Usuario.PasswordUser}
                onChange={handleChanges}
              />
            </div>
            <div className="mb-3"> 
              <input 
              type="password" 
              name="ConfirmPassword" 
              placeholder="Confirmar Contraseña" 
              className="form-control"               
              />
              </div>
            <div className="mb-3">
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Número de Teléfono"
                className="form-control"
                value={Usuario.PhoneNumber}
                onChange={handleChanges}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="AGE"
                placeholder="Edad"
                className="form-control"
                value={Usuario.AGE}
                onChange={handleChanges}
              />
            </div>
            {/* Botón de registro */}
            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                backgroundColor: '#28a745',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 'bold'
              }}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;