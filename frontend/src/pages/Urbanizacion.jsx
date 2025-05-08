import React, { useState } from 'react';

export default function Urbanizacion() {
  const [codigo, setCodigo] = useState('');
  const [nombreUrbanizacion, setNombreUrbanizacion] = useState('');
  const [misUrbanizaciones, setMisUrbanizaciones] = useState([
    { nombre: 'Urbanización La Primavera', codigo: '1234' },
    { nombre: 'Urbanización Santa Clara', codigo: '5678' },
  ]);
  const [nuevoCodigo, setNuevoCodigo] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');

  const handleCodigoChange = (e) => setCodigo(e.target.value);
  const handleNombreChange = (e) => setNombreUrbanizacion(e.target.value);

  const handleRegistrarUrbanizacion = () => {
    // Agregar la nueva urbanización a "Mis Urbanizaciones"
    if (nuevoCodigo && nuevoNombre) {
      setMisUrbanizaciones([
        ...misUrbanizaciones,
        { nombre: nuevoNombre, codigo: nuevoCodigo },
      ]);
      setNuevoCodigo('');
      setNuevoNombre('');
    }
  };

  const handleUnirseUrbanizacion = () => {
    // Lógica para verificar si el código y nombre coinciden
    const urbanizacion = misUrbanizaciones.find(
      (urban) => urban.codigo === codigo && urban.nombre === nombreUrbanizacion
    );
    if (urbanizacion) {
      alert('¡Te has unido a la urbanización con éxito!');
    } else {
      alert('Código o nombre incorrectos.');
    }
  };

  // Estilo de fondo uniforme
  const estiloFondo = { backgroundColor: '#f4f1e6' };

  return (
    <div className="container mt-5">
      <h2 className="text-center  mb-5">Registro y administracion de mis urbanizaciones</h2>

      {/* Sección para unirse a una urbanización */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-4">Acceder a una Urbanización</h3>
        <div className="mb-3">
          <label className="form-label">Nombre de la Urbanización:</label>
          <input
            type="text"
            className="form-control"
            value={nombreUrbanizacion}
            onChange={handleNombreChange}
            placeholder="Ingrese el nombre de la urbanización"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código de acceso:</label>
          <input
            type="text"
            className="form-control"
            value={codigo}
            onChange={handleCodigoChange}
            placeholder="Ingrese el código de acceso"
            required
          />
        </div>
        <button
          onClick={handleUnirseUrbanizacion}
          className="btn btn-success w-100"
        >
          Acceder
        </button>
      </div>

      {/* Sección para "Mis Urbanizaciones" */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-4">Mis Urbanizaciones</h3>
        <div className="list-group mb-4">
          {misUrbanizaciones.map((urban, index) => (
            <div key={index} className="list-group-item">
              <h5>{urban.nombre}</h5>
              <p>Código: {urban.codigo}</p>
            </div>
          ))}
        </div>

        {/* Agregar una nueva urbanización */}
        <h4>Registrar una nueva urbanización</h4>
        <div className="mb-3">
          <label className="form-label">Nombre de la Urbanización:</label>
          <input
            type="text"
            className="form-control"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            placeholder="Ingrese el nombre de la urbanización"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código de acceso:</label>
          <input
            type="text"
            className="form-control"
            value={nuevoCodigo}
            onChange={(e) => setNuevoCodigo(e.target.value)}
            placeholder="Ingrese el código de acceso"
            required
          />
        </div>
        <button
          onClick={handleRegistrarUrbanizacion}
          className="btn btn-success w-100"
        >
          Registrar Urbanización
        </button>
      </div>
    </div>
  );
}
