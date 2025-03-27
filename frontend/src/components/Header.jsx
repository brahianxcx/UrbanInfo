import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-1 border-bottom "  style={{ backgroundColor: '#f5f5dc' }}>
        <div className="d-flex align-items-center">
            <img src="logo.jpg"  alt="" style={{ height: '25px' }} className="me-2" />
            <Link to="/" className="text-decoration-none m-0 fs-6" style={{ color: 'green', fontWeight: 'bold' }}>UrbanInfo</Link>
           </div>
    <div className="d-flex ms-auto">
        <button className="btn btn-success me-2" style={{height:"35px"}}>MENU</button>
        <Link to="/login" className="btn btn-success" style={{height:"35px"}}>LOGIN</Link>
    </div>

        
        
   
    </header>
);
}