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
import Servicios from './pages/Servicios'; 
import Explore from './pages/Explore';
import ListarUsuarios from './pages/Usuarios/ListarUsuarios';
import ListarApartamentos from './pages/Apartamentos/ListarApartamentos';
import Urbanizacion from './pages/Urbanizacion';
import Ajustes from './pages/Ajustes';
import Eventos from './pages/Eventos';
import HomePrincipal from './pages/HomePrincipal';
import RutaProtegidaAdmin from './components/RutaProtegidaAdmin';
import ListarVehiculos from './pages/Vehiculos/ListarVehiculos';


export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5dc' }}>
        <div className="" style={{ }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/tabla-usuarios" element={<TablaUsuarios />} />
            <Route path="/cuenta" element={<Cuenta />} /> 
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/listar-apartamentos" element={<ListarApartamentos />} />          
            <Route path='/Urbanizacion' element={<Urbanizacion />} />
            <Route path='/ajustes' element={<Ajustes />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path="/home-principal" element={<HomePrincipal/>} />
            <Route path="/listar-usuarios"element={<ListarUsuarios /> }/>
            <Route path="/listar-vehiculos" element={<ListarVehiculos/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
