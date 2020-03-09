import React from "react";
import CytelLogo from "../../assets/cytel_owler_20190506_052832_original.jpg";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      {" "}
      <img className="logo" src={CytelLogo} alt="Logo" />
    </div>
  );
}

export default Header;
