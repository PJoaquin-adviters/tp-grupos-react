import { useState } from "react";
import { Botton } from "../Botton/Botton"
import "./FormLogin.css";
import { fetchData } from "../../utils/fetchUtils";
import { Navigate } from 'react-router-dom'

export const FormLogin = () => {

    let url = "https://bootcamp-adviters.herokuapp.com/login";
    const [emailAuth, setEmailAuth] = useState('');
    const [passwordAuth, setPasswordAuth] = useState('');




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
                <Navigate to="/grupos" />

            })
            .catch((err) => {
                console.log("Haz puesto un mail o clave no valida");
            });

    }

    return (

        <form>

            <label for="email"><b>EMAIL:</b></label>

            <input type="text" id="idEmail" name="email" onChange={(e) => setEmailAuth(e.target.value)} required />

            <label for="password"><b>Contraseña:</b></label>

            <input type="password" id="idPassword" name="password" onChange={(e) => setPasswordAuth(e.target.value)} required />

            <Botton handleClick={handleClick} message="Iniciar Sesion"></Botton>




        </form>

    )

}