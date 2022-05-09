import React from "react";
import Header from "./Header.js";
import "./Home.scss";
import MainLogo from "../../assets/logoMain.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-bg">
      <div className="header-part">
        <Header></Header>
      </div>
      <img src={MainLogo} alt="mainLogo" id="mainLogo"></img>

      <Link to="/o-nás">
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
}
