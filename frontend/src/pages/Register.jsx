import React from "react";
import backgroundImage from "/fondo-login2.jpg"; 
import axios from "axios";
import Swal from "sweetalert2";


const Register = () => {

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center', backgroundSize:'contain' }}>

    <div className="d-flex vh-100 justify-content-center align-items-center" >
      {/* Contenedor del registro */}
      <div className="p-4 rounded shadow-lg" style={{ backgroundColor: '#ffffff', width: '320px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333333', fontWeight: 'bold' }}>
          Registro
        </h2>
        <form>
          {/* Campo de Usuario */}
          <div className="mb-3">
            <input
          
              type="text"
              placeholder="Nombre de Usuario"
              className="form-control"
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '14px',
                color: '#555555'
              }}
            />
          </div>
          {/* Campo de Correo */}
          <div className="mb-3">
            <input         
              type="text"
              placeholder="Correo Electrónico"
              className="form-control"
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '14px',
                color: '#555555'
              }}
            />
          </div>
          {/* Campo de contraseña */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '14px',
                color: '#555555'
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder=" Confirmar Contraseña"
              className="form-control"
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '14px',
                color: '#555555'
              }}
            />
          </div>
          
          <div className="mb-3">
            <input       
              type="Number"
              placeholder="Número de Teléfono"             
              className="form-control"
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '14px',
                color: '#555555'
              }}
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

export default Register;