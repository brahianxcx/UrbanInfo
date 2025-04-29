import React from 'react';

export default function Home() {
    return (
        <section style={{ backgroundColor: '#f5f5dc', padding: '20px', textAlign: 'center' }}>
            <h2>¡Bienvenidos a UrbanInfo!</h2>
            <p>Información Comunitaria</p>
            <button style={{ backgroundColor: '#c3e88d', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                Explorar
            </button>
        </section>
    );
}