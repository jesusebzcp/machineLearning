import React from "react";
import Hero from "../components/Hero";
import subir from "./subir.png";
import tendencia from "./tendencia.png";
import gente from "./gente.png";
import hombre from "./hombre.png";
const Home = () => {
  return (
    <>
      <Hero />
      <section className="contSection">
        <h2>Servicios</h2>
        <div className="contServicio">
          <div className="containerSer ">
            {" "}
            <div className="imgServicio">
              <img src={subir} width="200px" height="250px" />
            </div>
            <div className="pServicio">
              <h4>Escala con nosotros.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec orci eros. Cras eu viverra dolor. Fusce volutpat pretium
                egestas. Suspendisse tristique at erat a auctor.
              </p>
            </div>
          </div>
          <div className="containerSer bg">
            {" "}
            <div className="imgServicio">
              <img src={tendencia} width="200px" height="250px" />
            </div>
            <div className="pServicio">
              <h4>Tendencia</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec orci eros. Cras eu viverra dolor. Fusce volutpat pretium
                egestas. Suspendisse tristique at erat a auctor.
              </p>
            </div>
          </div>
        </div>
        <div className="contServicio">
          <div className="containerSer">
            {" "}
            <div className="imgServicio">
              <img src={gente} width="200px" height="250px" />
            </div>
            <div className="pServicio">
              <h4>Examina</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec orci eros. Cras eu viverra dolor. Fusce volutpat pretium
                egestas. Suspendisse tristique at erat a auctor.
              </p>
            </div>
          </div>
          <div className="containerSer bg">
            {" "}
            <div className="imgServicio">
              <img src={hombre} width="200px" height="250px" />
            </div>
            <div className="pServicio">
              <h4>Estadisticas.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec orci eros. Cras eu viverra dolor. Fusce volutpat pretium
                egestas. Suspendisse tristique at erat a auctor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
