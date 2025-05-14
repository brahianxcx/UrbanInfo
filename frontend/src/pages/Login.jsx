import React from "react";
import backgroundImage from "/fondo-login2.jpg"; // Asegúrate de que la ruta sea correcta
const Login = () => {
  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover,contain', height: '100vh', backgroundPosition: 'center'}}>
    
    
    <div className="d-flex vh-100 justify-content-center align-items-center" >
      {/* Contenedor del login */}
      <div className="p-4 rounded shadow-lg" style={{ backgroundColor: '#ffffff', width: '320px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333333', fontWeight: 'bold' }}>
          Inicio de Sesión
        </h2>
        <form>
          {/* Campo de usuario */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Usuario o Correo Electrónico"
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
          {/* Enlace de recuperación de contraseña */}
          <div className="text-end mb-3">
            <a href="#" style={{ color: '#28a745', fontSize: '14px', textDecoration: 'none' }}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="text-end mb-3">
            <a href="/register" style={{ color: '#28a745', fontSize: '14px', textDecoration: 'none' }}>
              ¿No tienes cuenta? Registrate
            </a>
          </div>
          {/* Botón de login */}
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
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;