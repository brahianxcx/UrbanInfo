import React, { useState } from 'react';

export default function Ajustes() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [foto, setFoto] = useState(null);
  const [notificaciones, setNotificaciones] = useState(true);
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [contraseñaActual, setContraseñaActual] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [modo2FA, setModo2FA] = useState(false);
  const [idioma, setIdioma] = useState('es');

  const handleChangeNombre = (e) => setNombre(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeContraseña = (e) => setContraseñaActual(e.target.value);
  const handleChangeNuevaContraseña = (e) => setNuevaContraseña(e.target.value);
  const handleChangeConfirmarContraseña = (e) => setConfirmarContraseña(e.target.value);

  const toggleNotificaciones = () => setNotificaciones(!notificaciones);
  const toggleTemaOscuro = () => setTemaOscuro(!temaOscuro);
  const toggle2FA = () => setModo2FA(!modo2FA);

  const handleGuardarCambios = () => {
    alert('Cambios guardados con éxito');
  };

  // Estilo de fondo uniforme
  const estiloFondo = { backgroundColor: '#f4f1e6' };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-5">Ajustes de Cuenta</h2>

      {/* Ajustes de perfil */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3>Perfil</h3>
        <div className="mb-3">
          <label className="form-label">Cambiar nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={handleChangeNombre}
            placeholder="Ingrese su nombre actual"
          />
        </div>
        <div className='mb-3'>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={handleChangeNombre}
            placeholder="Ingrese su nuevo nombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Foto de perfil:</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFoto(URL.createObjectURL(e.target.files[0]))}
          />
          {foto && <img src={foto} alt="Foto de perfil" className="mt-3" width="100" />}
        </div>
      </div>

      {/* Ajustes de notificaciones */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3>Notificaciones</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="notificaciones"
            checked={notificaciones}
            onChange={toggleNotificaciones}
          />
          <label className="form-check-label" htmlFor="notificaciones">
            Recibir notificaciones por correo electrónico
          </label>
        </div>
      </div>

      {/* Ajustes de seguridad */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3>Seguridad</h3>
        <div className="mb-3">
          <label className="form-label">Contraseña actual:</label>
          <input
            type="password"
            className="form-control"
            value={contraseñaActual}
            onChange={handleChangeContraseña}
            placeholder="Ingrese su contraseña actual"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nueva contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={nuevaContraseña}
            onChange={handleChangeNuevaContraseña}
            placeholder="Ingrese su nueva contraseña"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar nueva contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={confirmarContraseña}
            onChange={handleChangeConfirmarContraseña}
            placeholder="Confirme su nueva contraseña"
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="2fa"
            checked={modo2FA}
            onChange={toggle2FA}
          />
          <label className="form-check-label" htmlFor="2fa">
            Activar autenticación de dos factores (2FA)
          </label>
        </div>
      </div>

      {/* Ajustes de idioma y región */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3>Idioma y Región</h3>
        <div className="mb-3">
          <label className="form-label">Idioma:</label>
          <select
            className="form-select"
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>

      {/* Tema */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3>Tema</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="temaOscuro"
            checked={temaOscuro}
            onChange={toggleTemaOscuro}
          />
          <label className="form-check-label" htmlFor="temaOscuro">
            Activar tema oscuro
          </label>
        </div>
      </div>

      {/* Botón de guardar cambios */}
      <button onClick={handleGuardarCambios} className="btn btn-success w-100">
        Guardar Cambios
      </button>
    </div>
  );
}
