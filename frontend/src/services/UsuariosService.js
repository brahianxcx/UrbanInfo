import axios from 'axios';

const api= 'http://localhost:3000/TablaUsuarios';

export const ObtenerUsuarios = async () => {

const ListadoUsuarios = await axios.get(api)
return ListadoUsuarios.data

}
export default { ObtenerUsuarios }
