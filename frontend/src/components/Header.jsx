import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  // Obtiene el usuario guardado en localStorage (si existe)
  // localStorage solo almacena strings, por eso usamos JSON.parse
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Función para cerrar sesión: elimina el usuario de localStorage y redirige al login
  const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom"
      style={{
        backgroundColor: '#4f7942',
        width: '100%',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {/* Logo y título */}
      <div className="d-flex align-items-center">
        <img src="logo1.png" alt="Logo" style={{ height: '40px' }} className="me-2" />
        <Link to="/" className="text-decoration-none fs-5 fw-bold" style={{ color: 'white' }}>
          UrbanInfo
        </Link>
      </div>

      {/* Botones de login y menú hamburguesa */}
      <div className="d-flex align-items-center gap-3">
        {/* Si NO hay usuario logueado, muestra el botón de LOGIN */}
        {!usuario && (
          <Link
            to="/login"
            className="btn"
            style={{
              height: "35px",
              backgroundColor: '#aa9c7c',
              color: 'white',
              border: '2px solid #8c7b5e',
              borderRadius: '5px',
              padding: '0 15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            LOGIN
          </Link>
        )}

        {/* Botón menú hamburguesa para abrir el menú lateral */}
        <button
          className="btn p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuLateralDerecho"
          aria-controls="menuLateralDerecho"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '35px',
            width: '35px',
          }}
        >
          <span style={{ fontSize: '24px', color: 'white' }}>&#9776;</span>
        </button>
      </div>

      {/* Menú lateral (offcanvas) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="menuLateralDerecho"
        aria-labelledby="menuLateralDerechoLabel"
      >
        {/* Encabezado del menú lateral */}
        <div className="offcanvas-header" style={{ backgroundColor: '#4f7942' }}>
          <h5 className="offcanvas-title" id="menuLateralDerechoLabel" style={{ color: "white" }}>
            UrbanInfo
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* Cuerpo del menú lateral */}
        <div
          className="offcanvas-body"
          style={{
            backgroundColor: '#f5f5dc',
            color: 'black',
            fontSize: '22px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 0
          }}
        >
          {/* Lista de opciones del menú */}
          <ul className="list-unstyled d-flex flex-column h-100 ps-4" style={{ marginBottom: 0 }}>
            {/* Solo muestra "Cuenta" si hay usuario logueado */}
            {usuario && ( 
              <>
              <li>
                  <a className="dropdown-item mb-2 d-flex align-items-center" href="/home-principal">
                    <i className="bi bi-house me-3"></i> Pagina Principal
                  </a>
                </li>        
              <li>
                <a className="dropdown-item mb-2 d-flex align-items-center" href="/cuenta">
                  <i className="bi bi-person-circle me-3"></i> Cuenta
                </a>
              </li>
              </>
            )}
            {/* Opción siempre visible */}
            <li>
              <a className="dropdown-item mb-2 d-flex align-items-center" href="/servicios">
                <i className="bi bi-gear me-3"></i> Servicios
              </a>
            </li>
            {/* Opciones solo para usuarios logueados */}
            {usuario &&  (
              <>
                <li>
                  <a className="dropdown-item mb-2 d-flex align-items-center" href="/listar-usuarios">
                    <i className="bi bi-people-fill me-3"></i> Ver Usuarios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item mb-2 d-flex align-items-center" href="/listar-apartamentos">
                    <i className="bi bi-houses-fill me-3"></i> Ver Apartamentos
                  </a>
                </li>
                <li>
                <a className="dropdown-item mb-2 d-flex align-items-center" href="/listar-vehiculos">
                  <i className="bi bi-truck-front-fill me-3"></i> Ver Vehículos
                </a>
              </li>
                
              </>
            )}
            {/* Solo para usuarios logueados */}
            {usuario && (
            <li>
              <a className="dropdown-item mb-2 d-flex align-items-center" href="/Urbanizacion">
                <i className="bi bi-house-door-fill me-3"></i> Mis urbanizaciones
              </a>
            </li>
            )}
          

            {/* Otras opciones siempre visibles */}
            <li>
              <a className="dropdown-item mb-2 d-flex align-items-center" href="/eventos">
                <i className="bi bi-calendar-event-fill me-3"></i> Eventos
              </a>
            </li>
            <li>
              <a className="dropdown-item mb-2 d-flex align-items-center" href="/ajustes">
                <i className="bi bi-sliders me-3"></i> Ajustes
              </a>
            </li>
            {/* Botón de cerrar sesión, solo si hay usuario logueado */}
            {usuario && (
              <li className="mt-auto">
                <button
                  className="dropdown-item d-flex align-items-center btn btn-link"
                  onClick={cerrarSesion}
                  style={{
                    color: 'red',
                    padding: 0,
                    fontSize: '21px', // Más grande
                    fontWeight: 'bold'
                  }}  >
                  <i className="bi bi-box-arrow-right me-3"></i> Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}