import errorImg from "../../img/error.png";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <section className="error-container">
      <img className="img-error" src={errorImg} alt="error" />
      <h1 className="titulo-error">ERROR 404</h1>
      <h3 className="titulo-secundario">Lo siento, página no encontrada</h3>
    </section>
  );
};

export default ErrorPage;
