import React from 'react'
import Logo from "../../assets/logo.png"
import "./Header.scss"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className='headerWrapper'>
        <img src={Logo} alt="headerLogo"></img>

        <nav>
            <ul>
                <li><Link to="/">DOMOV</Link></li>
                <li><Link to="/o-nás">O NÁS</Link></li>
                <li><Link to="/cenník">CENNÍK</Link></li>
                <li><Link to="/recenzie">RECENZIE</Link></li>
                <li><Link to="/kontakt">KONTAKT</Link></li>
            </ul>
        </nav>
    </div>
  )
}
