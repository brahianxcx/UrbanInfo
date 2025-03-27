import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App() {
    return (
      <div  style={{ minHeight: '100vh', backgroundColor: '#f5f5dc' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
            <Header />
            <Home />
            <Products />
            <Footer />
        </ div>
        </div>
    );
}

