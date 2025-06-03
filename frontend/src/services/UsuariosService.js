import axios from 'axios'; // Importa axios para hacer peticiones HTTP

const api = 'http://localhost:3000/usuarios/TablaUsuarios'; // URL base para las peticiones relacionadas con usuarios

export const ObtenerUsuarios = async () => { // Función para obtener la lista de usuarios desde el backend
    const ListadoUsuarios = await axios.get(api); // Realiza una petición GET a la API
    return ListadoUsuarios.data; // Retorna los datos recibidos (lista de usuarios)
}

export default { ObtenerUsuarios } // Exporta la función para usarla en otros archivos