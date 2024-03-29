import React from "react";
import Header from "./Header.js";
import "./Home.scss";
import MainLogo from "../../assets/logoMain.png";
import { Link } from "react-router-dom";
import bgVideo from "../../assets/bgVideo.mp4"

export default function Home() {
  var lastScrollTop = 0;
  
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    let headerNav = document.getElementById("headerNav");

    if (st > lastScrollTop){
      headerNav.classList.remove("hidden");
      headerNav.classList.add("active");
    } else {
      headerNav.classList.remove("active");
      headerNav.classList.add("hidden");
    }

    if (st <= 80) {
      headerNav.classList.remove("hidden");
      headerNav.classList.remove("active");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);

  return (
    <div className="home-bg">

    <div className='vid' dangerouslySetInnerHTML={{ __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            src="${bgVideo}"
          />,
        ` }}></div>
    
      <div id="headerNav" className="header-part" >
        <Header></Header>
        <h1 className="none">vždy strih odporúčam villiz barber villizbarbershop barber žilina zilina</h1>
      </div>
    
    <div className="mainContentHome">
      <img src={MainLogo} alt="mainLogo" id="mainLogo"></img>

      <Link to="/o-nás" onClick={() => document.querySelector(".about-part").scrollIntoView({behavior: "smooth"})}>
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
    </div>
  );
}
