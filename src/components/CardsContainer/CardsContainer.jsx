import React from "react";
import groupImg from "../../img/grupo-hero.png";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchUtils";
import "./CardsContainer.css";
import GroupCard from "../GroupCard/GroupCard";

const CardsContainer = () => {
  // VARIABLES
  let url = "https://bootcamp-adviters.herokuapp.com/grupos";
  let token = localStorage.getItem("localToken");
  let options = { headers: { Authorization: `bearer ${token}` } };
  // HOOKS
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    fetchData(url, "GET", options).then((data) => {
      setGrupos([...data]);
    });
  }, []);
  return (
    <>
      <section className="section-grupos">
        <h1>
          CONOCE A LOS EQUIPOS DE{" "}
          <b style={{ color: "var(--color-secundario)" }}>DESARROLLADORES</b>
        </h1>
        <img src={groupImg} alt="Imagen del grupo" />
        <div className="card-container">
          {grupos.length > 0 ? (
            grupos.map((grupo, index) => (
              <GroupCard titulo={grupo.descripcion} key={`grupo-${index}`} />
            ))
          ) : (
            <h2 className="error-grupos">No hay elementos que mostrar</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default CardsContainer;
