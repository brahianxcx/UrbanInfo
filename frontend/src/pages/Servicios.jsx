import React, { useState } from 'react';

export default function Servicios() {
  const [pedido, setPedido] = useState({
    tipo: '',
    descripcion: '',
    direccion: '',
    telefono: '',
    metodoPago: '',
    estado: 'Pendiente',
    pagado: false,
  });

  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  // Maneja los cambios en los campos de formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setPedido((prev) => ({ ...prev, [name]: value }));
  };

  // Enviar el pedido (cambia el estado a enviado)
  const enviarPedido = (e) => {
    e.preventDefault();
    setPedidoEnviado(true);
  };

  // Marcar el pedido como pagado
  const marcarPagado = () => {
    setPedido((prev) => ({ ...prev, pagado: true }));
  };

  // Confirmar entrega del pedido
  const confirmarEntrega = () => {
    setPedido((prev) => ({ ...prev, estado: 'Entregado' }));
  };

  // Cancelar el pedido
  const cancelarPedido = () => {
    setPedido((prev) => ({ ...prev, estado: 'Cancelado' }));
  };

  // Estilo de fondo uniforme
  const estiloFondo = { backgroundColor: '#f4f1e6' };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success mb-5">Servicios Disponibles</h2>

      {/* Servicio de Pago */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-4">Pago de Servicios Públicos</h3>
        <p className="text-muted mb-4">Selecciona los servicios que deseas pagar:</p>
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="p-3 border rounded text-center bg-white">
              <input type="checkbox" id="agua" className="form-check-input me-2" />
              <label htmlFor="agua" className="form-check-label fw-bold">Agua</label>
              <p className="small text-muted">Servicio básico</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded text-center bg-white">
              <input type="checkbox" id="luz" className="form-check-input me-2" />
              <label htmlFor="luz" className="form-check-label fw-bold">Luz</label>
              <p className="small text-muted">Electricidad del hogar</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded text-center bg-white">
              <input type="checkbox" id="wifi" className="form-check-input me-2" />
              <label htmlFor="wifi" className="form-check-label fw-bold">WiFi</label>
              <p className="small text-muted">Internet residencial</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded text-center bg-white">
              <input type="checkbox" id="administracion" className="form-check-input me-2" />
              <label htmlFor="administracion" className="form-check-label fw-bold">Administración</label>
              <p className="small text-muted">Cuota mensual</p>
            </div>
          </div>
        </div>
        <span className="badge bg-secondary mb-3">Precio no disponible</span>
        <br />
        <button className="btn btn-success">Pagar</button>
      </div>

      {/* Reserva de Instalaciones */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-3">Reserva de Instalaciones</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Instalación:</label>
            <select className="form-select">
              <option>Piscina</option>
              <option>Zona BBQ</option>
              <option>Salón Social</option>
              <option>Gimnasio</option>
              <option>Cancha</option>
            </select>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Fecha y hora de inicio:</label>
              <input type="datetime-local" className="form-control" />
            </div>
            <div className="col">
              <label className="form-label">Fecha y hora de fin:</label>
              <input type="datetime-local" className="form-control" />
            </div>
          </div>
          <p><strong>Precio:</strong> $50.000 COP</p>
          <button className="btn btn-success">Reservar</button>
        </form>
      </div>

      {/* Servicio a Domicilio */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-3">Servicio a Domicilio</h3>
        {!pedidoEnviado ? (
          <form onSubmit={enviarPedido}>
            <div className="mb-3">
              <label className="form-label">Tipo de servicio:</label>
              <select className="form-select" name="tipo" onChange={manejarCambio} required>
                <option value="">Seleccione una opción</option>
                <option>Compras</option>
                <option>Farmacia</option>
                <option>Comida</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción:</label>
              <textarea className="form-control" name="descripcion" rows="3" placeholder="Descríbenos aquí el domicilio" onChange={manejarCambio} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Número de Apartamento:</label>
              <input className="form-control" name="direccion" type="text" onChange={manejarCambio} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono de contacto:</label>
              <input className="form-control" name="telefono" type="tel" onChange={manejarCambio} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Método de pago:</label>
              <select className="form-select" name="metodoPago" onChange={manejarCambio} required>
                <option value="">Seleccione un método</option>
                <option>Efectivo</option>
                <option>Transferencia</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success">Solicitar</button>
          </form>
        ) : (
          <div>
            <p><strong>Estado:</strong> {pedido.estado}</p>
            <p><strong>Pagado:</strong> {pedido.pagado ? 'Sí' : 'No'}</p>
            {!pedido.pagado && (
              <button onClick={marcarPagado} className="btn btn-primary me-2">Marcar como pagado</button>
            )}
            <button onClick={confirmarEntrega} className="btn btn-success me-2">Confirmar entrega</button>
            <button onClick={cancelarPedido} className="btn btn-danger">Cancelar pedido</button>
          </div>
        )}
      </div>

      {/* Soporte Técnico */}
      <div className="mb-5 border rounded p-4 shadow-sm" style={estiloFondo}>
        <h3 className="mb-3">Soporte Técnico</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Descripción del problema:</label>
            <textarea className="form-control" rows="3" placeholder="Ej. El gas tiene una fuga." />
          </div>
          <button className="btn btn-success">Enviar solicitud</button>
        </form>
      </div>
    </div>
  );
}
