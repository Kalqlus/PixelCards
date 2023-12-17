import React from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";
import PathCostatnts from "../../views/PathConstants";

function Header() {
  return (
    <>
      <header>
        <div className="image-wrapper">
          <img src="" alt="PixelCards" />
        </div>
        <div className="navigation-wrapper">
          <NavLink to={PathCostatnts.HOME}>home</NavLink>
          <NavLink to={PathCostatnts.CARDSINFO}>cards</NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
