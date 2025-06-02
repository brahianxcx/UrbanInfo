import React from 'react'; // Importa React para poder usar JSX y componentes
import { useNavigate } from 'react-router-dom';  // Importa hook para navegación programática
import { FaArrowDown } from 'react-icons/fa'; // Importa el ícono de flecha hacia abajo
import { Link } from 'react-router-dom';  // Importa Link para navegación declarativa

export default function Home() {
  const navigate = useNavigate(); // Hook para cambiar de ruta programáticamente

  

  return (
    <div className="d-flex vh-100">
      {/* Columna izquierda con bienvenida y botón */}
      <div
        className="w-50 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#f5f5dc' }}
      >
        <small>Información Comunitaria</small>
        <h1>¡Bienvenidos a UrbanInfo!</h1>

        <Link
          to="/products" // Navega a la página de productos al hacer clic
          className="btn btn-beige mt-3"
          style={{
            backgroundColor: '#aa9c7c',
            color: 'white',
            border: '2px solid #8c7b5e',
            borderRadius: '5px',
          }}
        >
          Explorar
        </Link>
      </div>

      {/* Columna derecha con imagen */}
      <div className="w-50">
        <img
          src="UrbanInfo.jpeg"
          alt="UrbanInfo"
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      
    </div>
  );
}