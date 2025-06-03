import React from 'react';

export default function HomePrincipal() {
  return (
    <div style={{ backgroundColor: '#f4f1e6', paddingBottom: '80px' }}>
      {/* Encabezado Principal */}
      <section
        id="homePrincipal"
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: '50vh', padding: '60px 20px' }}
      >
        <h2 style={{ fontWeight: 'bold', color: '#5c4b2c' }}>Inicio - UrbanInfo</h2>
        <p style={{ maxWidth: '400px', marginTop: '10px', color: '#6b5e4b' }}>
          Conoce las últimas noticias, eventos y actividades de tu urbanización en un solo lugar.
        </p>
        </section>
      {/* Noticias */}
      <section className="container mb-5 text-center">
  <h3 className="mb-4" style={{ color: '#5c4b2c' }}>Últimas Noticias</h3>
  <div className="row g-4">
    {/* Noticia 1 */}
    <div className="col-md-4">
      <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
        <img 
          src="piscina.jpeg" 
          alt="Piscina mantenimiento" 
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
        <h5>Mantenimiento de la Piscina</h5>
        
        <p>
          Cerrada del 15 al 20 de mayo por mantenimiento. Agradecemos tu comprensión.
        </p>
        <a href="#" style={{ color: '#aa9c7c' }}>Leer más</a>
      </div>
    </div>

    {/* Noticia 2 */}
    <div className="col-md-4">
      <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
        <img 
          src="gim.jpg" 
          alt="Nuevo gimnasio" 
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
        <h5>Nuevo Gimnasio</h5>
        <br />
        <p>
          Te invitamos a la inauguración el 18 de mayo a las 10:00 AM. ¡Nuevos equipos disponibles!
        </p>
        <a href="#" style={{ color: '#aa9c7c' }}>Leer más</a>
      </div>
    </div>

    {/* Noticia 3 */}
    <div className="col-md-4">
      <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
        <img 
          src="recoleccion.jpeg" 
          alt="Recolección residuos" 
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
        <h5>Recolección Especial</h5>
        <br />
        <p>
          Este 22 de mayo recolectaremos electrodomésticos y residuos especiales en el parqueadero.
        </p>
        <a href="#" style={{ color: '#aa9c7c' }}>Leer más</a>
      </div>
    </div>
  </div>
</section>




      {/* Eventos */}
      <section className="container">
        <h3 className="mb-4" style={{ color: '#5c4b2c' }}>Próximos Eventos</h3>
        <div className="d-flex flex-column gap-4">
          <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
          <img 
          src="yoga.webp" 
          alt="Clases de Yoga" 
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
            <h5>Clases de Yoga</h5>
            <p>Lunes y miércoles a las 7:00 AM en el salón comunal. ¡Relájate y activa tu cuerpo!</p>
          </div>
          <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
          <img 
          src="fiesta.avif" 
          alt="Fiesta Comunitaria"
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
            <h5>Fiesta Comunitaria</h5>
            <p>El 25 de mayo en el salón social. Música en vivo, comida y diversión para todos.</p>
          </div>
          <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#fffbe6' }}>
          <img 
          src="futbol.jpeg" 
          alt="Torneo de Fútbol" 
          className="img-fluid rounded mb-3"
          style={{ height: '170px', width: '100%', objectFit: 'cover' }}
        />
            <h5>Torneo de Fútbol</h5>
            <p>Inscríbete antes del 20 de mayo y compite en la cancha central con tus vecinos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
