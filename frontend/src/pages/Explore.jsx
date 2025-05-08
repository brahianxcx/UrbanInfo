import React from 'react';

export default function Explore() {
  return (
    <div className="container py-5 px-4" style={{ backgroundColor: '#f5f5dc', borderRadius: '10px' }}>
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#4b4b4b' }}>
        Acerca de <span style={{ color: '#8c7b5e' }}>UrbanInfo</span>
      </h2>

      <p className="lead text-center mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        UrbanInfo es una solución digital moderna para la gestión integral de conjuntos residenciales. Brinda herramientas eficientes y seguras para que administradores y residentes puedan comunicarse, organizar eventos, gestionar espacios y estar siempre conectados.
      </p>

      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="p-4 h-100 border rounded shadow-sm" style={{ backgroundColor: '#e0dcb5' }}>
            <h4 className="mb-3">¿Qué ofrecemos?</h4>
            <ul>
              <li>Anuncios relevantes para toda la comunidad en tiempo real.</li>
              <li>Reserva fácil de zonas comunes como salones, canchas o BBQ.</li>
              <li>Notificaciones inmediatas ante emergencias o actividades.</li>
              <li>Interfaz simple e intuitiva para usuarios y administradores.</li>
              <li>Participación en eventos comunitarios directamente desde la app.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4 h-100 border rounded shadow-sm" style={{ backgroundColor: '#e0dcb5' }}>
            <h4 className="mb-3">Sobre los Creadores</h4>
            <p>
              <strong>Camilo Jaramillo Zapata</strong> y <strong>Brahian Serna Londoño</strong>, estudiantes de Ingeniería de Software, son los desarrolladores de esta aplicación.
            </p>
            <p>
              El proyecto nació como una iniciativa académica con la intención de aportar soluciones tecnológicas funcionales que respondan a las necesidades reales de las comunidades residenciales.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 border rounded shadow-sm mb-5" style={{ backgroundColor: '#e0dcb5' }}>
        <h4 className="mb-3">Visión a Futuro</h4>
        <p>
          UrbanInfo continúa en desarrollo con planes de integrar nuevas funcionalidades como:
        </p>
        <ul>
          <li>Pagos en línea para administración y reservas.</li>
          <li>Reportes y seguimiento de mantenimiento.</li>
          <li>Chat interno entre vecinos y administración.</li>
          <li>Sistemas de seguridad con alertas inteligentes.</li>
        </ul>
        <p>
          Nuestra meta es convertirnos en una plataforma líder en soluciones comunitarias digitales.
        </p>
      </div>

      <div className="text-center">
        <a
          className="btn"
          style={{
            backgroundColor: '#aa9c7c',
            color: 'white',
            border: '2px solid #8c7b5e',
            borderRadius: '6px',
            padding: '10px 25px',
            fontWeight: 'bold'
          }}
          href="/products"
        >
          Volver a Inicio
        </a>
      </div>
    </div>
  );
}
