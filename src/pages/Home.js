import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1 className="whiteText">This guy is a</h1>
        <p className="whiteText">Fucking Cute Person 🤙🏻🤙🏻🤙🏻</p>
        <Link to="/menu">
          <button className="whiteText">Why you should marry him?</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
