import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
      {/* Logo + Título */}
      <div className="d-flex align-items-center">
        <img src="logo1.png" alt="Logo" style={{ height: '40px' }} className="me-2" />
        <Link to="/" className="text-decoration-none fs-5 fw-bold" style={{ color: 'white' }}>
          UrbanInfo
        </Link>
      </div>

      {/* Botones */}
      <div className="d-flex align-items-center gap-3">
        {/* Botón de Login */}
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

        {/* Botón menú hamburguesa */}
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

      {/* Menú lateral */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="menuLateralDerecho"
        aria-labelledby="menuLateralDerechoLabel"
      >
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
        <div
          className="offcanvas-body"
          style={{
            backgroundColor: '#f5f5dc',
            color: 'black',
            fontSize: '22px',
          }}
        >
          <ul className="list-unstyled">
            <li><a className="dropdown-item mb-2" href="/cuenta">Cuenta</a></li>
            <li><a className="dropdown-item mb-2" href="/servicios">Servicios</a></li>
            <li><a className="dropdown-item mb-2" href="/listar-usuarios">Ver Usuarios</a></li>
            <li><a className="dropdown-item mb-2" href="/Urbanizacion">Mis urbanizaciones</a></li>
            <li><a className="dropdown-item mb-2" href="/eventos">Eventos</a></li>
            <li><a className="dropdown-item mb-2" href="/ajustes">Ajustes</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
