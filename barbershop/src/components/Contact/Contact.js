import React from 'react'
import "./Contact.scss"
import insta from "../../assets/insta-logo.png"
import fb from "../../assets/fb-logo.png"
import contact from "../../assets/kreslo.jpg"

export default function Contact() {
  return (
    <div className='contactPart'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20852.483223215764!2d18.70565807910156!3d49.20889830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145fc2a67a2e77%3A0x751dea2c9af113b5!2sVilliz%20Barbershop%20%C5%BDilina!5e0!3m2!1ssk!2ssk!4v1669628122787!5m2!1ssk!2ssk"></iframe>
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
            <a href="tel:+421918778993">0918 778 993</a><br></br><br></br>
            <a href='mailto:viliam.stranianek7@gmail.com'>viliam.stranianek7@gmail.com</a>
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
