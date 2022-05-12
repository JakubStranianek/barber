import React from 'react'
import "./Contact.scss"
import insta from "../../assets/insta-logo.png"
import fb from "../../assets/fb-logo.png"

export default function Contact() {
  return (
    <div className='contactPart'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.560403992057!2d18.738488315686855!3d49.20889827932346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145eb419abfd5b%3A0x8a9ca3a736ef31b6!2sAlexandra%20Rudnaya%2045%2C%20010%2001%20%C5%BDilina!5e0!3m2!1ssk!2ssk!4v1652382906465!5m2!1ssk!2ssk"></iframe>
        <div className='photoOfBarberShop'>
            
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
