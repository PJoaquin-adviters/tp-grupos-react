import React from 'react';
import groupImg from '../../img/grupo-hero.png';
import { useEffect } from 'react';
import { fetchData } from '../../utils/fetchUtils';

const GroupList = () => {

    let url = "https://bootcamp-adviters.herokuapp.com/grupos";
    let token = localStorage.getItem("localToken");

    let arr;
    let options = { headers: { Authorization: `bearer ${token}` } };

    useEffect(() => {
        arr = fetchData(url, "GET", options).then((data) => data.map((el) => <GroupCard titulo={el.descripcion}></GroupCard>));


    }, []);
    return (
        <main>
            <section className="hero">
                <h1>
                    CONOCE A LOS EQUIPOS DE{' '}
                    <b style={{ color: 'var(--color-secundario)' }}>DESARROLLADORES</b>
                </h1>
                <img src={groupImg} alt="Imagen del grupo" />
            </section>
            <section className="card-container">
                {arr}
            </section>
        </main>
    );
};

const GroupCard = ({ titulo }) => {
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <button className="btn" type="submit">
                Mostrar más
            </button>
        </div>
    );
};

export default GroupList;