import React from "react";

import animationData from "../animation/17453-builddie-homepage-animation.json";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="containerHero">
      <div className="Contletras">
        <h2 className="letras">
          Somos tus aliados en Inteligencia Artificial.
        </h2>

        <div className="contBtns">
          <Link to={"/login"} className="btn btnLogin">
            Ingresar <i className="fas fa-sign-in-alt"></i>{" "}
          </Link>
          <Link to={"/login"} className="btn2 ">
            Registrate <i class="far fa-user"></i>
          </Link>
        </div>
      </div>
      <div calssName="contEmoti  ">
        {" "}
        <div className="pc">
          {" "}
          <Lottie options={defaultOptions} height={300} width={650} />
        </div>
        <div className="movil">
          {" "}
          <Lottie
            className="movillt"
            options={defaultOptions}
            height={300}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
