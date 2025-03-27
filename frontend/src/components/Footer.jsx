import React from 'react';

export default function Footer() {
    return (
      <footer className="text-success text-start p-3 mt-4" style={{ backgroundColor: '#f5f5dc' }}>
         <div className="row mb-2">
                <div className="col-12 text-start fw-bold">UrbanInfo </div>
            </div>
      <div className="row" >
          <div className="col border-end">52-1-33-12345678<br />info@sitio.com</div>
          <div className="col border-end">Medellín, Antioquia, Colombia</div>
          <div className="col border-end">Derechos reservados</div>
          <div className="col">&nbsp;</div>
      </div>
        </footer>
    );
}

