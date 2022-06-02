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
                        <img src={index.url} alt={"img" + index.id}></img>
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
            <img alt='paint'/>
        </div>

        <div className='video'>
            <iframe src="https://player.vimeo.com/video/716338390?h=376f3d58aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Villiz Barbershop"></iframe>
            </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}

