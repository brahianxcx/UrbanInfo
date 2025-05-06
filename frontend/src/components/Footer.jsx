import React from 'react';

export default function Footer() {
  return (
    <footer
      className="text-white text-start p-4 mt-4"
      style={{
        backgroundColor: '#4f7942',
        width: '100vw', // Asegura que ocupe todo el ancho de la ventana
        margin: '0', // Elimina márgenes externos
      }}
    >
      <div className="row mb-3">
        <div className="col-12 fw-bold fs-5">UrbanInfo</div>
      </div>
      <div className="row">
        <div className="col-md-4 border-end mb-2">
          <h6>Contacto</h6>
          <p>Tel: 52-1-33-12345678</p>
          <p>Email: info@sitio.com</p>
          <p>Horario: Lun - Vie, 8:00 - 17:00</p>
        </div>
        <div className="col-md-4 border-end mb-2">
          <h6>Ubicación</h6>
          <p>Medellín, Antioquia</p>
          <p>Colombia</p>
        </div>
        <div className="col-md-4 mb-2">
          <h6>Legal</h6>
          <p>© 2025 UrbanInfo. Todos los derechos reservados.</p>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
}