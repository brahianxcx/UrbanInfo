import axios from 'axios';

const api= 'http://localhost:3000/apartamentos/listar-apartamentos';

export const ObtenerApartamentos = async () => {

const ListadoApartamentos = await axios.get(api)
return ListadoApartamentos.data

}
export default { ObtenerApartamentos }
