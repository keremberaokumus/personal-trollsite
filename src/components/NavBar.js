import React, { useState } from "react";
import Logo from "../assets/burgerLogo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import { Button } from "@mui/material";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="logo">
          <Link to="/"><img src={Logo}/></Link>
          
        </div>
        <div className="hiddenLinks">
          <Link to="/">Home </Link>
          <Link to="/menu">Reasons </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home </Link>
        <Link to="/menu">Menu </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Button onClick={toggleNavbar}>
          <ReorderRoundedIcon />
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
