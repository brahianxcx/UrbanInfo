import React from 'react';

export default function Productos() {
    return (
        <section style={{ backgroundColor: '#e6f5d0', padding: '20px', textAlign: 'center' }}>
            <h2>Servicios</h2>
            <div>
                <div style={{ border: '1px solid #8bc34a', padding: '10px', margin: '5px' }}>
                    <h3>Pago de Servicios</h3>
                    <p>US$ 5</p>
                    <button style={{ backgroundColor: '#c3e88d', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>
                        Reservar ahora
                    </button>
                </div>
                <div style={{ border: '1px solid #8bc34a', padding: '10px', margin: '5px' }}>
                    <h3>Reserva de Instalaciones</h3>
                    <p>US$ 20</p>
                    <button style={{ backgroundColor: '#c3e88d', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>
                        Reservar ahora
                    </button>
                </div>
                <div style={{ border: '1px solid #8bc34a', padding: '10px', margin: '5px' }}>
                    <h3>Servicio a Domicilio</h3>
                    <p>US$ 10</p>
                    <button style={{ backgroundColor: '#c3e88d', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>
                        Reservar ahora
                    </button>
                    </div>
            </div>
        </section>
    );
}