import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import "./Reviews.scss"
import guy1 from "../../assets/reviews/guy1.jpg"
import guy2 from "../../assets/reviews/guy2.jpg"
import guy3 from "../../assets/reviews/guy3.jpg"
import guy4 from "../../assets/reviews/guy4.jpg"
import guy5 from "../../assets/reviews/guy5.jpg"
import guy6 from "../../assets/reviews/guy6.jpg"
import guy7 from "../../assets/reviews/guy7.jpg"
import guy8 from "../../assets/reviews/guy8.jpg"
import guy9 from "../../assets/reviews/guy9.jpg"

const images = [
    {
        id: 1, 
        url: guy1,
        boyName: "Martin",
        reviewText: "Vždy spokojný po návšteve tohto barbershopu. Príjemné prostredie, kvalitný barber, cena služieb zodpovedá kvalite. Plne každému odporúčam. Barber Vilo si dá vždy záležať."
    },
    {
        id: 2, 
        url: guy2,
        boyName: "Dávid",
        reviewText: "Čo sa týka Viliho v Žiline tak odporúčam 👌 Šikovný chalan vie sa s tým pekne vyhrať. Spokojnosť 100% plus príjemné prostredie."
    }, 
    {
        id: 3, 
        url: guy3,
        boyName: "Daniel",
        reviewText: "Vždy spokojosť so strihom ale aj čo sa týka prostredia. Villiz Barber komunikatívny a vždy vykúzli účes ktorý spĺňa všetky moje kritéria, za mňa najlepšia voľba v ZA."
    },
    {
        id: 4, 
        url: guy4,
        boyName: "Miro",
        reviewText: "Barber Villiz má perfektný prístup. Vždy mi urobí skvelý strih. Je to štýlový barbershop. TOPka v Žiline. Odporúčam."
    },
    {
        id: 5, 
        url: guy5,
        boyName: "Michal",
        reviewText: "Vždy veľká spokojnosť či už so strihom alebo s úpravou brady s Villiz Barberom vždy dobre pokecáme a odchádzam s fresh cutom spokojný domov 😌"
    },
    {
        id: 6, 
        url: guy6,
        boyName: "Roman",
        reviewText: "Dlho som nevedel nájsť barbera, ktorý by vyhovoval mojej náročnosti, no Villiz spĺňa všetko na špičkovej úrovni. Od priateľského a pohodového prístupu k zákaznikovi až po precízne vypiplaný strih. Venuje sa klientovi v maximálnej možnej miere a dá si záležať aj na tých najmenších detailoch. Môžem len a len odporúčiť aj ostatným."
    }
    ,
    {
        id: 7, 
        url: guy7,
        boyName: "Martin",
        reviewText: "Top služby. Originálne a hlavne príjemné prostredie. Robota vždy na 100%, žiadne odfláknutie. Ochotný a kamarátsky prístup. Vždy odchádzam spokojný 👍☝️👏 Odporúčam !!"
    },
    {
        id: 8, 
        url: guy8,
        boyName: "Jakub",
        reviewText: "Vždy maximálna spokojnosť. Každý jeden strih je niečím jedinečný a ja potom spokojne môžem ísť von so psíkom 🦮👧🏻 Pekný deň prajem"
    },
    {
        id: 9, 
        url: guy9,
        boyName: "Lukáš",
        reviewText: "Moderné prostredie kde sa vždy cítim pohodlne. Výborna priateľská nálada a ešte lepšie služby. Vrelo odporúčam!!"
    }
]

export default function Reviews() {
  return (
    <div className='reviewPart'>
        <Carousel 
        width={window.innerWidth > 595 ? 500 : 330}
        centerMode={true}
        infiniteLoop={window.innerWidth > 595 ? true : false}
        emulateTouch={window.innerWidth > 595 ? true : false}
        selectedItem={4}
        showArrows={window.innerWidth > 595 ? false : true}
        thumbWidth={60}
        showStatus={false}
        showIndicators={false}
        swipeable={window.innerWidth > 595 ? true : false}
        showThumbs={window.innerWidth > 595 ? true : false}
        >
                {images.map((index) => (
                    <div key={"review" + index.id}>
                        <img src={index.url} alt={index.boyName} className="reviewGuy"></img>
                        <div className='nameWithReview'>
                            <h3>{index.boyName}</h3>
                            <p>{index.reviewText}</p>
                        </div>
                    </div>
                ))}

        </Carousel>
    </div>
  )
}
