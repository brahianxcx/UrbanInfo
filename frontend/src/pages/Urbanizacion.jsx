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
    const urbanizacion = misUrbanizaciones.find(
      (urban) => urban.codigo === codigo && urban.nombre === nombreUrbanizacion
    );
    if (urbanizacion) {
      alert('¡Te has unido a la urbanización con éxito!');
    } else {
      alert('Código o nombre incorrectos.');
    }
  };

  const estiloSeccion = {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  };

  const estiloTarjeta = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const estiloTabla = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderCollapse: 'collapse',
  };

  const estiloCelda = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Registro y administración de mis urbanizaciones</h2>

      {/* Acceder */}
      <div className="mb-5" style={estiloSeccion}>
        <h4 className="mb-4">Acceder a una Urbanización</h4>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombreUrbanizacion}
            onChange={handleNombreChange}
            placeholder="Nombre de la urbanización"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código de acceso:</label>
          <input
            type="text"
            className="form-control"
            value={codigo}
            onChange={handleCodigoChange}
            placeholder="Código"
          />
        </div>
        <button onClick={handleUnirseUrbanizacion} className="btn btn-success w-100">
          Acceder
        </button>
      </div>

      {/* Urbanizaciones actuales */}
      <div className="mb-5" style={estiloSeccion}>
        <h4 className="mb-4">Mis Urbanizaciones</h4>
        {misUrbanizaciones.map((urban, index) => (
          <div key={index} style={estiloTarjeta}>
            <strong>{urban.nombre}</strong><br />
            <span className="text-muted">Código: {urban.codigo}</span>
          </div>
        ))}

       </div>

      {/* Encuesta nueva sección */}
      <div className="mb-5" style={estiloSeccion}>
        <h4 className="mb-3">¿Quieres registrar tu urbanización?</h4>
        <p>Rellena la siguiente encuesta:</p>
        <table style={estiloTabla}>
          <thead>
            <tr>
              <th style={estiloCelda}>Nombre de la Urbanización</th>
              <th style={estiloCelda}>Código de acceso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={estiloCelda}>
                <input
                  type="text"
                  className="form-control"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  placeholder="Ej: Torres del Sol"
                />
              </td>
              <td style={estiloCelda}>
                <input
                  type="text"
                  className="form-control"
                  value={nuevoCodigo}
                  onChange={(e) => setNuevoCodigo(e.target.value)}
                  placeholder="Ej: 9876"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={handleRegistrarUrbanizacion}
          className="btn btn-success mt-3 w-100"
        >
          Enviar Encuesta
        </button>
      </div>
    </div>
  );
}
