import React from 'react';

export default function Cuenta() {
  return (
    <div className="mt-4">
      <h2 className="mb-4">Mi Cuenta</h2>
      
      <div className="card">
        <div className="card-header">
          Información Básica
        </div>
        <div className="card-body">
          <p><strong>Nombre:</strong>Camilo Jaramillo</p>
          <p><strong>Correo:</strong> camilo@gmail.com</p>
          <p><strong>Dirección:</strong> Calle #123</p>
          <p><strong>Teléfono:</strong> 123-456-7890</p>
        </div>
      </div>

      <div className="mt-4">
        <h3>Ajustes</h3>
        <ul>
          <li><a href="#">Cambiar contraseña</a></li>
          <li><a href="#">Editar perfil</a></li>
          <li><a href="#">Eliminar cuenta</a></li>
        </ul>
      </div>
    </div>
  );
}
