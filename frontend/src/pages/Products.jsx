import React from 'react';

export default function Productos() {
  return (
    <div className="d-flex flex-column" style={{ backgroundColor: '#f5f5dc' }}>
        <h2 className="text-start" style={{ borderBottom: '2px solid gray', paddingBottom: '5px' }}>Servicios</h2>
        <div className="d-flex justify-content-around p-3" style={{ backgroundColor: '#f5f5dc' }}>
            <div className="border p-3" style={{borderTop: '2px solid gray' }}>
                <h3>Pago de Servicios</h3>
                <p>US$ 5</p>
                <button className="btn btn-success" >Reservar ahora</button>
            </div>
            <div className="border p-3"  >
                <h3>Reserva de Instalaciones</h3>
                <p>US$ 20</p>
                <button className="btn btn-success">Reservar ahora</button>
            </div>
            <div className="border p-3"  >
                
                <h3>Servicio a Domicilio</h3>
                <p>US$ 10</p>
                <button className="btn btn-success"  >Reservar ahora</button>
            </div>
        </div>
        <div className="d-flex p-3"  style={{ backgroundColor: '#f5f5dc' }}>
            <div className="w-50 text-center p-3">
                <h3>UrbanInfo</h3>
                <p>Sobre Nosotros</p>
                <p>
                    Descubre la excelencia en urbanización con UrbanInfo. Somos la
                    opción definitiva para todos tus servicios de urbanización. Nuestro
                    compromiso es brindarte calidad y eficiencia en cada proyecto.
                    Con UrbanInfo, tu satisfacción está garantizada. ¡Únete a nosotros hoy!
                </p>
                <button className="btn btn-success">Explora</button>
            </div>
            <div className="w-50" style={{ backgroundColor: '#f5f5dc' }}>
                <img 
                    src="sobrenosotros.jpg" 
                    alt="UrbanInfo" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }} 
                />
                </div>
             </div>
             <h2 className="text-center p-3" style={{ borderBottom: '2px solid gray', paddingBottom: '5px' }}>Eventos Próximos</h2>
            <div className="d-flex justify-content-around p-3">
            <div className="border p-3" style={{ borderTop: '2px solid gray' }}>
  <img src="OIP.jpeg" alt="Encuentro profesional" 
       className="w-100 mb-2" 
       style={{ height: '200px', objectFit: 'cover' }} />
  <h3>Encuentro profesional</h3>
  <p>mar, 09 de ene | Vista des...</p>
  <p>Leer más</p>
  <button className="btn btn-success">VER MAS...</button>
</div>

<div className="border p-3" style={{ borderTop: '2px solid gray' }}>
  <img src="profesionales-evento-ideas-comunidad.webp" alt="Evento urbano de profesionales" 
       className="w-100 mb-2" 
       style={{ height: '200px', objectFit: 'cover' }} />
  <h3>Evento urbano de profesionales</h3>
  <p>mar, 06 de feb | Distrito d...</p>
  <p>Leer más</p>
  <button className="btn btn-success">VER MAS...</button>
</div>

<div className="border p-3" style={{ borderTop: '2px solid gray' }}>
  <img src="playa.avif" alt="Fiesta privada al atardecer" 
       className="w-100 mb-2" 
       style={{ height: '200px', objectFit: 'cover' }} />
  <h3>Fiesta privada al atardecer</h3>
  <p>sáb, 17 de mar | West Villa...</p>
  <p>Leer más</p>
  <button className="btn btn-success">VER MAS...</button>
</div>

                    
            </div>
        </div>
  
    );
}