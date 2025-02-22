import React from "react";
import { Link } from "react-router-dom";

import shoppingIcon from "/ShoppingIcon.png";
import VictrsLogo from "/victrs-logo.png";

const Navbar = () => {
  return (
    
      <div className="title-container">
        <Link to="/">
        <img className="store-logo" src={VictrsLogo} />
        </Link>
        <div className="title">
          <h1 className="title-text">VICTRS DIGITAL</h1>
        </div>
        <div className="title-icon-container">

          <img className="title-icon" src={shoppingIcon} />

        </div>
      </div>

  );
};

export default Navbar
