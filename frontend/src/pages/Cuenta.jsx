import React from 'react';
import { Link } from 'react-router-dom';

export default function Cuenta() {
  // Obtiene el usuario logueado desde localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-4">Mi Cuenta</h2>

      {/* Información Básica */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#d4edda', fontWeight: 'bold' }}>
          Información Básica
        </div>
        <div className="card-body" style={{ backgroundColor: 'white' }}>
          <p><strong>Nombre:</strong> {usuario?.UserName || "No disponible"}</p>
          <p><strong>Correo:</strong> {usuario?.Email || "No disponible"}</p>
          <p><strong>Teléfono:</strong> {usuario?.PhoneNumber || "No disponible"}</p>
          <p><strong>Edad:</strong> {usuario?.AGE || "No disponible"}</p>
        </div>
      </div>

      {/* Historial de Pedidos */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#f9e79f', fontWeight: 'bold' }}>
          Historial de Pedidos
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>No tienes pedidos registrados.</li>
            {/* Aquí puedes mapear pedidos reales si los tienes */}
          </ul>
        </div>
      </div>

      {/* Historial de Transacciones */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#aed6f1', fontWeight: 'bold' }}>
          Historial de Transacciones
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>No tienes transacciones registradas.</li>
            {/* Aquí puedes mapear transacciones reales si las tienes */}
          </ul>
        </div>
      </div>

      {/* Preferencias de Notificación */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#e2e3f3', fontWeight: 'bold' }}>
          Preferencias de Notificación
        </div>
        <div className="card-body">
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="notiEmail" defaultChecked />
            <label className="form-check-label" htmlFor="notiEmail">
              Notificaciones por correo electrónico
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="notiSMS" />
            <label className="form-check-label" htmlFor="notiSMS">
              Notificaciones por SMS
            </label>
          </div>
        </div>
      </div>

      {/* Seguridad de la Cuenta */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#fde2e2', fontWeight: 'bold' }}>
          Seguridad de la Cuenta
        </div>
        <div className="card-body">
          <p>¿Deseas cambiar tu contraseña?</p>
          <Link to="" className="btn btn-warning">
            Cambiar Contraseña
          </Link>
        </div>
      </div>

      {/* Actividad Reciente */}
      <div className="card w-100 mb-4" style={{ maxWidth: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#d1ecf1', fontWeight: 'bold' }}>
          Actividad Reciente
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>Iniciaste sesión el 9 de mayo</li>
            <li>Cambiaste tus preferencias de correo</li>
            <li>Cambiaste tu contraseña hace 2 semanas</li>
          </ul>
        </div>
      </div>

      {/* Ajustes + Cerrar sesión */}
      <div className="mt-3 text-center">
        <h4>Ajustes generales</h4>
        <Link
          to="/ajustes"
          className="btn me-2"
          style={{
            backgroundColor: '#aa9c7c',
            color: 'white',
            border: '2px solid #8c7b5e',
            borderRadius: '5px',
            padding: '8px 20px',
          }}
        >
          Ajustes
        </Link>
      </div>
    </div>
  );
}