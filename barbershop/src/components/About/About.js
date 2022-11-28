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
            Novootvorený barbershop v mestskej časti Žilina Bôrik na ulici Alexandra Rudnaya 45. 
            Príď si oddýchnuť a zresetovať po náročnom dni do nášho holičstva Villiz Barbershop. 
            Ponúkame ti kvalitný pánsky strih, úpravu brady a mnoho ďalšieho. Veľkou výhodou je bezplatné 
            parkovanie takmer pred dverami nášho barbershopu. Samozrejmosťou je že ku každej našej službe ti
            bude dopriata kvalitná kavička, chladený nápoj alebo pohárik kvalitného rumu. Momentálne sa 
            o teba postará Villiz Barber, ktorý zároveň aj náš barbershop celý zastrešuje. Tešíme sa na teba.
            </p>
        </div>

        <div className='our-barber'>
            <img alt='paint'/>
        </div>
    </div>
  )
}

