import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

export default function Cuenta() {
  return (
    <div className="mt-4">
  <h2 className="mb-4">Mi Cuenta</h2>

  <div className="card">
    <div 
      className="card-header" 
      style={{ backgroundColor: '#d4edda', color: 'black', fontWeight: 'bold' }}
    >
      Información Básica
    </div>
    <div 
      className="card-body" 
      style={{ backgroundColor: '#fdf7e3' }}
    >
      <p><strong>Nombre:</strong> Camilo Jaramillo</p>
      <p><strong>Correo:</strong> camilo@gmail.com</p>
      <p><strong>Dirección:</strong> Calle #123</p>
      <p><strong>Teléfono:</strong> 3147964238</p>
    </div>
  </div>



      <div className="mt-4">
        <h3>Ajustes de la cuenta</h3>
        <Link to="/ajustes" className="btn btn-success" style={{ backgroundColor: '#aa9c7c',color:'white',  border: '2px solid #8c7b5e', borderRadius: '5px' }}>
          Ajustes
        </Link>
      </div>
    </div>
  );
}
