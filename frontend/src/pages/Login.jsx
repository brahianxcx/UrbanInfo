import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import backgroundImage from "/fondo-login2.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ UserName: "", PasswordUser: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", form);
      
      // Guardar usuario completo recibido en localStorage
      localStorage.setItem("usuario", JSON.stringify(res.data));

      Swal.fire("Bienvenido", "Inicio de sesión exitoso", "success");
      navigate("/home-principal");
    } catch (error) {
      Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover,contain",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div
          className="p-4 rounded shadow-lg"
          style={{ backgroundColor: "#ffffff", width: "320px" }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#333333", fontWeight: "bold" }}
          >
            Inicio de Sesión
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="UserName"
                placeholder="Usuario o Correo Electrónico"
                className="form-control"
                value={form.UserName}
                onChange={handleChange}
                style={{
                  borderColor: "#cccccc",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "14px",
                  color: "#555555",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="PasswordUser"
                placeholder="Contraseña"
                className="form-control"
                value={form.PasswordUser}
                onChange={handleChange}
                style={{
                  borderColor: "#cccccc",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "14px",
                  color: "#555555",
                }}
              />
            </div>
            <div className="text-end mb-3">
              <a
                href="#"
                style={{ color: "#28a745", fontSize: "14px", textDecoration: "none" }}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="text-end mb-3">
              <a
                href="/register"
                style={{ color: "#28a745", fontSize: "14px", textDecoration: "none" }}
              >
                ¿No tienes cuenta? Registrate
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                backgroundColor: "#28a745",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
