import React from 'react'; // Importa React para usar JSX y componentes
import { Link } from 'react-router-dom'; // Importa Link para navegación entre páginas

export default function Productos() {
  return (
    <div className="d-flex flex-column" style={{ backgroundColor: '#f5f5dc' }}>
      {/* Título principal */}
      <h2 className="text-center py-4" style={{ borderBottom: '3px solid gray' }}>
        Más Información sobre UrbanInfo
      </h2>
      {/* Sección principal con descripción e imagen */}
      <div className="d-flex p-4 align-items-center" style={{ backgroundColor: '#f5f5dc' }}>
        <div className="w-50 text-center p-4">
          <h3>¿Qué es UrbanInfo?</h3>
          <p>
            UrbanInfo es una plataforma moderna diseñada para mejorar la comunicación, gestión y vida en comunidad dentro de urbanizaciones y conjuntos residenciales. Ofrece múltiples funciones prácticas, desde anuncios, reservas, soporte técnico y participación activa en eventos, todo en una sola app. 
          </p>
          <p>
            ¡Descubre una nueva forma de vivir en comunidad!
          </p>
          <Link
            to="/explore" // Botón que lleva a la sección de exploración
            className="btn btn-success"
            style={{
              height: '40px',
              backgroundColor: '#aa9c7c',
              color: 'white',
              border: '2px solid #8c7b5e',
              borderRadius: '6px'
            }}
          >
            Saber más
          </Link>
        </div>
        <div className="w-50">
          <img
            src="sobrenosotros.jpg"
            alt="UrbanInfo"
            className="w-100 h-100"
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
      </div>
      {/* Secciones informativas sobre las funcionalidades */}
      <div className="d-flex flex-column gap-4 p-4">
        <div className="p-4 border rounded shadow" style={{ backgroundColor: '#e0dcb5' }}>
          <h3>Gestión de Anuncios</h3>
          <p>
            Publica y visualiza anuncios relevantes para toda la comunidad en tiempo real. La administración puede compartir información crucial como mantenimientos, avisos de seguridad o eventos importantes directamente a los residentes.
          </p>
        </div>

        <div className="p-4 border rounded shadow" style={{ backgroundColor: '#e0dcb5' }}>
          <h3>Reservas de Instalaciones</h3>
          <p>
            Facilita la reserva de espacios comunes como salones sociales, canchas deportivas o zonas BBQ sin necesidad de papeleos. Desde tu celular o computador puedes agendar tu espacio con facilidad.
          </p>
        </div>

        <div className="p-4 border rounded shadow" style={{ backgroundColor: '#e0dcb5' }}>
          <h3>Notificaciones Instantáneas</h3>
          <p>
            Recibe alertas inmediatas sobre novedades en tu urbanización: cortes de agua, mantenimiento, reuniones o cualquier evento urgente. Así nunca te perderás de lo que ocurre en tu comunidad.
          </p>
        </div>

        <div className="p-4 border rounded shadow" style={{ backgroundColor: '#e0dcb5' }}>
          <h3>Soporte Técnico</h3>
          <p>
            Un canal directo para que los usuarios reporten fallos en la plataforma y soporte dentro de la urbanizaciòn. Nuestro equipo de soporte está listo para ayudarte y mantener una experiencia fluida y segura.
          </p>
        </div>

        <div className="p-4 border rounded shadow" style={{ backgroundColor: '#e0dcb5' }}>
          <h3>Participación en Eventos</h3>
          <p>
            Desde UrbanInfo también puedes explorar y unirte a eventos comunitarios como ferias, reuniones vecinales o celebraciones locales. Todo desde la comodidad de tu dispositivo.
          </p>
        </div>
      </div>
    </div>
  );
}