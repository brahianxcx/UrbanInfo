import React from 'react';

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-1 border-bottom "  style={{ backgroundColor: '#f5f5dc' }}>
        <div className="d-flex align-items-center">
            <img src="logo.jpg"  alt="" style={{ height: '25px' }} className="me-2" />
            <h1 className="text-success m-0 fs-6">UrbanInfo</h1>
            <button className="btn btn-success btn-sm fs-7 " style={{cursor: "e-resize"}} >MENU</button>

       
         <button className="btn btn-success btn-sm fs-7" style={{cursor: "e-resize"}}>LOGIN</button>

        </div>
        
   
    </header>
);
}