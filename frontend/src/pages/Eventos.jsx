import React from 'react';

export default function Eventos() {
  return (
    <div className="d-flex flex-column" style={{ backgroundColor: '#f5f5dc' }}>
      <h2 className="text-center p-3" style={{ borderBottom: '2px solid gray', paddingBottom: '5px' }}>Eventos de la Comunidad</h2>

      <div className="d-flex justify-content-around p-3 flex-wrap gap-3">

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="OIP.jpeg" alt="Encuentro profesional"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Encuentro profesional</h3>
          <p>Mar, 09 de Ene | Vista del Valle</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="profesionales-evento-ideas-comunidad.webp" alt="Evento urbano de profesionales"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Evento urbano de profesionales</h3>
          <p>Mar, 06 de Feb | Distrito Creativo</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="playa.avif" alt="Fiesta privada al atardecer"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Fiesta privada al atardecer</h3>
          <p>Sáb, 17 de Mar | West Village</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="yoga.webp" alt="Clase de yoga comunitaria"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Clase de yoga comunitaria</h3>
          <p>Dom, 24 de Mar | Parque Central</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="feria.jpeg" alt="Feria de productos locales"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Feria de productos locales</h3>
          <p>Sáb, 30 de Mar | Plaza Principal</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

        <div className="border p-3" style={{ borderTop: '2px solid gray', width: '30%', backgroundColor: 'white' }}>
          <img src="cine.webp" alt="Cine bajo las estrellas"
            className="w-100 mb-2"
            style={{ height: '200px', objectFit: 'cover' }} />
          <h3>Cine bajo las estrellas</h3>
          <p>Vie, 05 de Abr | Jardín de la Urbanización</p>
          <div className="text-center">
            <button className="btn btn-success" style={{ height: "35px", backgroundColor: '#aa9c7c', color: 'black', border: '2px solid #8c7b5e', borderRadius: '5px' }}>VER MÁS...</button>
          </div>
        </div>

      </div>
    </div>
  );
}
