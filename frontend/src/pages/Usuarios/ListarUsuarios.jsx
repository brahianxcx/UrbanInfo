import React, { use } from 'react'
import { useState,useEffect } from 'react'
import { ObtenerUsuarios } from '../../services/UsuariosService'

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [error,seterror] = useState('')

useEffect((u) => {

    fetchUsuarios()

},[])

const fetchUsuarios = async () => {

try {
    const respuesta = await ObtenerUsuarios()
setUsuarios(respuesta)
} catch (error) {
    seterror(error)
}

}    

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Lista de usuarios</h1>
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">correo electronico</th>
                        <th scope="col">Numero de telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.nombre} className='text-center'>
                            <td scope="row">{u.UserName}</td>
                            <td scope="row">{u.PasswordUser}</td>
                            <td scope="row">{u.Email}</td>
                            <td scope="row">{u.PhoneNumber}</td>
                        </tr>
                    ))}
                    <tr>                               
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
