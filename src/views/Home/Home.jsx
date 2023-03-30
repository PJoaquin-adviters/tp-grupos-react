import { FormLogin } from "../../components/FormLogin/FormLogin";

import loginImg from "../../img/login.png";

import "./Home.css";

export const Home = () => {
  return (
    <section className="home">
      <img className="login-img" src={loginImg} alt="" />
      <FormLogin></FormLogin>
    </section>
  );
};
