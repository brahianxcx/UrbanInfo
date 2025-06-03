// Importa StrictMode de React para ayudar a detectar problemas potenciales en la aplicación
import { StrictMode } from 'react'
// Importa createRoot para crear el punto de entrada de la aplicación React en el DOM
import { createRoot } from 'react-dom/client'
// Importa el componente principal de la aplicación
import App from './App.jsx'
// Importa el bundle de JavaScript de Bootstrap para funcionalidades como modales y menús
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importa los estilos CSS de Bootstrap para el diseño visual
import 'bootstrap/dist/css/bootstrap.min.css';

// Renderiza la aplicación React en el elemento con id 'root' del HTML
createRoot(document.getElementById('root')).render(
  // StrictMode envuelve la aplicación para activar comprobaciones y advertencias adicionales en desarrollo
  <StrictMode>
    <App /> {/* Componente principal de la aplicación */}
  </StrictMode>,
)