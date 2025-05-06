import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import TablaUsuarios from './pages/TablaUsuarios'; 
import Cuenta from './pages/Cuenta'; 

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5dc' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tabla-usuarios" element={<TablaUsuarios />} />
            <Route path="/cuenta" element={<Cuenta />} /> 
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
