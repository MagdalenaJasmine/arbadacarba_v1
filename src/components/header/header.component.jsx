import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="home-container" to="/">
      Home
    </Link>
    <div className="options">
      <Link className="option" to="about">
        About
      </Link>
    </div>
  </div>
);

export default Header;
