import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target="_blank" href="https://www.instagram.com/herkesinmerakettigicapybara/"><InstagramIcon /></a>
        <a target="_blank" href="https://www.facebook.com/kerembera.okumus/"><FacebookIcon /></a>
        <a target="_blank" href="https://twitter.com/kermestwitatio"><TwitterIcon /></a>
      </div>

      <p> &copy; 2022 scelus 🤙🏻🤙🏻🤙🏻</p>
    </div>
  );
}

export default Footer;
