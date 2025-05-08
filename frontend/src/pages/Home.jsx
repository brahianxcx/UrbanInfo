import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { FaArrowDown } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';  

export default function Home() {
  const navigate = useNavigate(); 

  const handleScroll = () => {
    navigate('/home-principal'); 
  };

  return (
    <div className="d-flex vh-100">
     
      <div
        className="w-50 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#f5f5dc' }}
      >
        <small>Información Comunitaria</small>
        <h1>¡Bienvenidos a UrbanInfo!</h1>

        <Link
          to="/products"
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

    
      <div className="w-50">
        <img
          src="UrbanInfo.jpeg"
          alt="UrbanInfo"
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

     
      <div
        className="d-flex justify-content-center align-items-center position-fixed"
        style={{
          bottom: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          cursor: 'pointer',
        }}
        onClick={handleScroll}
      >
        <FaArrowDown size={40} color="#8c7b5e" />
      </div>
    </div>
  );
}
