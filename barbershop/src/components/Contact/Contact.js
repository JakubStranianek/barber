import React from 'react'
import "./Contact.scss"
import insta from "../../assets/insta-logo.png"
import fb from "../../assets/fb-logo.png"
import contact from "../../assets/contact.jpg"

export default function Contact() {
  return (
    <div className='contactPart'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10426.241611607898!2d18.740677!3d49.2088983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x751dea2c9af113b5!2sVilliz%20Barbershop!5e0!3m2!1ssk!2ssk!4v1652691041439!5m2!1ssk!2ssk"></iframe>
        <div className='photoOfBarberShop'>
            <img src={contact} alt="contactPhoto"></img>
        </div>    

    <div className='flexContact'>
        <div className='adress'>
            <h6>Adresa</h6>
            <p>Alexandra Rudnaya 45</p>
            <p>010 01 Žilina</p>
            <p>Villiz Barbershop</p>
        </div>

        <div className='contact'>
            <h6>Kontakt</h6>
            <p>0918 778 993</p>
            <p>viliam.stranianek7@gmail.com</p>
        </div>
    </div>

        <div className='socialSites'>
            <a href='https://www.facebook.com/viliam.stranianek' target="_blank" rel="noreferrer"><img src={fb} alt="logoFb"></img></a>  
            <a href='https://www.instagram.com/villiz_barber/' target="_blank" rel="noreferrer"><img src={insta} alt="logoInsta"></img></a>  
            <p>Sleduj nás</p>
        </div>

        <div id='copyright'>
            <p>Copyright © 2022 Jakub Stranianek. All Rights Reserved</p>
        </div>
    </div>
  )
}
