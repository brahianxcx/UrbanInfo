import React, { useState } from 'react';

export default function TablaUsuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: 'Carlos Gómez', correo: 'carlosgomez@example.com', direccion: 'Calle 123, Medellín', telefono: '3001234567' },
    { id: 2, nombre: 'Paula Martínez', correo: 'paulamartinez@example.com', direccion: 'Calle 456, Bogotá', telefono: '3102345678' },
    { id: 3, nombre: 'Jorge Rodríguez', correo: 'jorgerodriguez@example.com', direccion: 'Avenida 56, Cali', telefono: '3203456789' },
    { id: 4, nombre: 'Ana Pérez', correo: 'anaperez@example.com', direccion: 'Calle 32, Medellín', telefono: '3104567890' },
    { id: 5, nombre: 'Luis Sánchez', correo: 'luissanchez@example.com', direccion: 'Calle 123, Barranquilla', telefono: '3115678901' },
   
  ]);

  return (
    <div className="container mt-4">
      <h2 className="text-success text-center mb-4">Lista de Usuarios</h2>
      <div className="table-responsive">
        <table className="table table-bordered" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <thead style={{ backgroundColor: '#256029', color: '#fff' }}>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Dirección</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id} style={{ backgroundColor: '#d0e7d2' }}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
