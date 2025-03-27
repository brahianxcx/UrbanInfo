import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="d-flex vh-100">
        <div className="w-50 d-flex flex-column justify-content-center align-items-center"style={{ backgroundColor: '#f5f5dc' }}>
            <small>Información Comunitaria</small>
            <h1>¡Bienvenidos a UrbanInfo!</h1>
            <Link to="/products" className="btn btn-success">Explora</Link>
        </div>
        <div className="w-50 mt-3">
            <img 
                src="/UrbanInfo.jpeg" 
                alt="UrbanInfo" 
                className="w-100 h-100" 
                style={{ objectFit: 'cover' }} 
            />
        </div>
    </div>
    );
}