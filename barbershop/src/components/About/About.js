import React from 'react'
import "./About.scss"
import gallery1 from "../../assets/gallery1.JPG"
import gallery2 from "../../assets/gallery2.JPG"
import gallery3 from "../../assets/gallery3.JPG"
import paint from "../../assets/paint.png"

export default function About() {
  return (
    <div className='about-part'>
        <div className='aboutHeading'>
            <div className='line'></div>
            <h3>O nás</h3>
            <div className='line'></div>
        </div>

        <div className='small-gallery'>
            <div className='image1'>
                <img src={gallery1} alt='img1'></img>
            </div>

            <div className='image2'>
                <img src={gallery2} alt='img2'></img>
            </div>

            <div className='image3'>
                <img src={gallery3} alt='img3'></img>
            </div>
        </div>

        <div className='about-text-content'>
            <p>
            Sme novootvorený barbershop v krásnom tichom prostredí mesta Žilina, kde panuje dobrá náladička a pohoda. Služby ktoré ponúkame sú luxusné pánske strihy, úpravy brady, voskovanie, farbenie vlasov a mnoho ďalších detailov. V cene z ponúkaných služieb si môžeš dopriať kávičku alebo ak si nechal doma auto tak kvalitný alkohol pre chlapa. Aktuálne máme obsadené jedno kreslo s Villiz Barberom. Druhé kreslo comming soon. 
            </p>
        </div>

        <div className='our-barber'>
            <img src={paint} alt='paint'></img>
            <div className='nameOfBarber'>
                <h2>Viliam</h2>
                <h2>Stranianek</h2>
            </div>
        </div>
    </div>
  )
}

