import React, {useState} from 'react'
import "./About.scss"
import gallery1 from "../../assets/gallery1.JPG"
import gallery2 from "../../assets/gallery2.JPG"
import gallery3 from "../../assets/gallery3.JPG"
import paint from "../../assets/paint.png"


import CloseIcon from '@mui/icons-material/Close';

const galleryData = [
    {
        id: 1, 
        url: gallery1
    },
    {
        id: 2, 
        url: gallery2
    },
    {
        id: 3, 
        url: gallery3
    },
] 


export default function About() {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);    
    }

    return (
    <div className='about-part'>
        <div className='aboutHeading'>
            <div className='line'></div>
            <h3>O nás</h3>
            <div className='line'></div>
        </div>

        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="showPhoto"></img>
            <CloseIcon onClick={() => setModel(false)}/>
        </div>

        <div className='small-gallery'>
            {
                galleryData.map(index => 
                    <div className={"image" + index.id} key={"barbershop" + index.id} onClick={() => getImg(index.url)}>
                        <img src={index.url} alt={"img" + index.id} onClick=""></img>
                    </div>
                )
            }
        </div>

        <div className='about-text-content'>
            <p>
            Sme novootvorený barbershop v krásnom tichom prostredí mesta Žilina, kde panuje dobrá náladička a pohoda. Služby ktoré ponúkame sú luxusné pánske strihy, úpravy brady, voskovanie, farbenie vlasov a mnoho ďalších detailov. V cene z ponúkaných služieb si môžeš dopriať kávičku alebo ak si nechal doma auto tak kvalitný alkohol pre chlapa. Aktuálne máme obsadené jedno kreslo s Villiz Barberom. Druhé kreslo comming soon. 
            </p>
        </div>

        <div className='our-barber'>
            <img src={paint} alt='paint'></img>
            <div className='nameOfBarber'>
                <h2>Náš barber</h2>
                <h2>Viliam Stranianek</h2>
            </div>
        </div>
    </div>
  )
}

