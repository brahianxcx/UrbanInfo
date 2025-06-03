import React, { useState } from 'react';

export default function Ajustes() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [modo2FA, setModo2FA] = useState(false);
  const [idioma, setIdioma] = useState('es');
  const [accesibilidadTextoGrande, setAccesibilidadTextoGrande] = useState(false);
  const [modoLectura, setModoLectura] = useState(false);
  const [sonidoActivado, setSonidoActivado] = useState(true);
  const [ubicacionActivada, setUbicacionActivada] = useState(false);
  const [privacidadOcultarPerfil, setPrivacidadOcultarPerfil] = useState(false);
  const [actualizacionesAutomaticas, setActualizacionesAutomaticas] = useState(true);
  const [rendimientoModoAhorro, setRendimientoModoAhorro] = useState(false);

  const estiloFondo = {
    backgroundColor: '#ffffff',
  };

  const handleGuardarCambios = () => {
    alert('Cambios guardados con éxito');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-dark mb-5">Ajustes de la Aplicación</h2>

      <div className="row g-4">
        {/* Notificaciones */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Notificaciones</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={notificaciones}
                onChange={() => setNotificaciones(!notificaciones)}
                id="notificaciones"
              />
              <label className="form-check-label" htmlFor="notificaciones">
                Recibir notificaciones por correo
              </label>
            </div>
          </div>
        </div>

        {/* Tema */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Tema</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={temaOscuro}
                onChange={() => setTemaOscuro(!temaOscuro)}
                id="temaOscuro"
              />
              <label className="form-check-label" htmlFor="temaOscuro">
                Activar tema oscuro
              </label>
            </div>
          </div>
        </div>

        {/* Seguridad 2FA */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Seguridad</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={modo2FA}
                onChange={() => setModo2FA(!modo2FA)}
                id="modo2FA"
              />
              <label className="form-check-label" htmlFor="modo2FA">
                Autenticación de dos factores (2FA)
              </label>
            </div>
          </div>
        </div>

        {/* Idioma */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Idioma</h5>
            <select
              className="form-select"
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
            >
              <option value="es">Español</option>
              <option value="en">Inglés</option>
              <option value="fr">Francés</option>
              <option value="de">Alemán</option>
            </select>
          </div>
        </div>

        {/* Accesibilidad */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Accesibilidad</h5>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={accesibilidadTextoGrande}
                onChange={() => setAccesibilidadTextoGrande(!accesibilidadTextoGrande)}
                id="textoGrande"
              />
              <label className="form-check-label" htmlFor="textoGrande">
                Activar texto grande
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={modoLectura}
                onChange={() => setModoLectura(!modoLectura)}
                id="modoLectura"
              />
              <label className="form-check-label" htmlFor="modoLectura">
                Activar modo lectura
              </label>
            </div>
          </div>
        </div>

        {/* Sonido */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Sonido</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={sonidoActivado}
                onChange={() => setSonidoActivado(!sonidoActivado)}
                id="sonido"
              />
              <label className="form-check-label" htmlFor="sonido">
                Sonido activado
              </label>
              
            </div>
          </div>
        </div>

        {/* Privacidad */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Privacidad</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={privacidadOcultarPerfil}
                onChange={() => setPrivacidadOcultarPerfil(!privacidadOcultarPerfil)}
                id="privacidad"
              />
              <label className="form-check-label" htmlFor="privacidad">
                Ocultar perfil en búsquedas
              </label>
            </div>
          </div>
        </div>

        {/* Rendimiento */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Rendimiento</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={rendimientoModoAhorro}
                onChange={() => setRendimientoModoAhorro(!rendimientoModoAhorro)}
                id="modoAhorro"
              />
              <label className="form-check-label" htmlFor="modoAhorro">
                Activar modo ahorro de energía
              </label>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Ubicación</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={ubicacionActivada}
                onChange={() => setUbicacionActivada(!ubicacionActivada)}
                id="ubicacion"
              />
              <label className="form-check-label" htmlFor="ubicacion">
                Permitir acceso a ubicación
              </label>
            </div>
          </div>
        </div>

        {/* Actualizaciones */}
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm" style={estiloFondo}>
            <h5>Actualizaciones</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={actualizacionesAutomaticas}
                onChange={() => setActualizacionesAutomaticas(!actualizacionesAutomaticas)}
                id="actualizaciones"
              />
              <label className="form-check-label" htmlFor="actualizaciones">
                Activar actualizaciones automáticas
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Botón guardar */}
      <button onClick={handleGuardarCambios} className="btn btn-success w-100 mt-5 mb-4">
        Guardar Cambios
      </button>
    </div>
  );
}
