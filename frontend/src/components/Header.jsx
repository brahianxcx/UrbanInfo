import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-1 border-bottom" style={{ backgroundColor: '#4f7942' }}>
      <div className="d-flex align-items-center">
        <img src="logo.jpg" alt="" style={{ height: '25px' }} className="me-2" />
        <Link to="/" className="text-decoration-none m-0 fs-6" style={{ color: 'white', fontWeight: 'bold' }}>UrbanInfo</Link>
      </div>

      <div className="d-flex ms-auto gap-2">
        <div className="dropdown">
          <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "35px" }}>
            Menu
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/cuenta">Cuenta</Link></li> {/* Modificado para agregar el enlace a Cuenta */}
            <li><a className="dropdown-item" href="#">Servicios</a></li>
            <li><a className="dropdown-item" href="#">Ajustes</a></li>
          </ul>
        </div>

        <Link to="/register" className="btn btn-success" style={{ height: "35px" }}>Registrarse</Link>
        <Link to="/login" className="btn btn-success" style={{ height: "35px" }}>LOGIN</Link>
        <Link to="/tabla-usuarios" className="btn btn-success" style={{ height: "35px" }}>Ver Usuarios</Link>
      </div>
    </header>
  );
}
