import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navPrincipal">
      <div className="contLogo">
        <Link to={"/src"} className="logo">
          W&amp;J
        </Link>
      </div>
      <div className="contBtn">
        <button className="btn btnNav ">
          Contactenos <i className="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
