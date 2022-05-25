import React, {useState} from 'react'
import Logo from "../../assets/logo.png"
import "./Header.scss"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const handleToggle = () => {
      setToggleMenu(!toggleMenu);
  } 
  
  const handleDeleteResponsive = () => {
    if (window.innerWidth <= 889) {
      document.getElementById("navBar").classList.remove("responsive");
      document.getElementById("navBar").classList.remove("show");
    }
  }

  window.addEventListener("resize", handleDeleteResponsive)
  return (
    <div className='headerWrapper'>
        <img src={Logo} alt="headerLogo"></img>

        <nav>
            <ul id="navBar" className={toggleMenu ? "responsive show" : ""}>
                <li><Link to="/" onClick={() => window.scrollTo(0,0)}>DOMOV</Link></li>
                <li><Link to="/o-nás" onClick={() => document.querySelector(".about-part").scrollIntoView({behavior: "smooth"})}>O NÁS</Link></li>
                <li><Link to="/cenník" onClick={() => document.querySelector(".priceList-part").scrollIntoView({behavior: "smooth"})}>CENNÍK</Link></li>
                <li><Link to="/recenzie" onClick={() => document.querySelector(".reviewPart").scrollIntoView({behavior: "smooth"})}>RECENZIE</Link></li>
                <li><Link to="/kontakt" onClick={() => document.querySelector(".contactPart").scrollIntoView({behavior: "smooth"})}>KONTAKT</Link></li>
            </ul>
        </nav>

        <MenuIcon onClick={handleToggle}/>
    </div>
  )
}
