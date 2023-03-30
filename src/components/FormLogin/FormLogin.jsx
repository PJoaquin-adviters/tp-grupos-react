import { useState } from "react";
import { Botton } from "../Botton/Botton";
import "./FormLogin.css";
import { fetchData } from "../../utils/fetchUtils";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

export const FormLogin = () => {
  let url = "https://bootcamp-adviters.herokuapp.com/login";
  const [emailAuth, setEmailAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");

  const navigate = useNavigate();
  const { abrirSesion } = useContext(LoginContext);

  const handleClick = (e) => {
    e.preventDefault();
    let options = {
      body: JSON.stringify({
        email: emailAuth,
        password: passwordAuth,
      }),
    };
    fetchData(url, "POST", options)
      .then((data) => {
        let token = data.accessToken.stsTokenManager.accessToken;
        localStorage.setItem("localToken", token);
        abrirSesion({ nombre: data.nombre, grupo: data.grupos.id });
        navigate("/grupos");
      })
      .catch((err) => {
        console.log("Haz puesto un mail o clave no valida");
      });
  };

  return (
    <form>
      <label htmlFor="email">
        <b>EMAIL:</b>
      </label>
      <input
        type="text"
        id="idEmail"
        name="email"
        onChange={(e) => setEmailAuth(e.target.value)}
        required
      />
      <label htmlFor="password">
        <b>Contraseña:</b>
      </label>
      <input
        type="password"
        id="idPassword"
        name="password"
        onChange={(e) => setPasswordAuth(e.target.value)}
        required
      />
      <Botton handleClick={handleClick} message="Iniciar Sesion"></Botton>
    </form>
  );
};
