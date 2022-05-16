import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import "./Reviews.scss"
import guy1 from "../../assets/reviews/guy1.png"
import guy2 from "../../assets/reviews/guy2.png"
import guy3 from "../../assets/reviews/guy3.png"
import guy4 from "../../assets/reviews/guy4.png"
import guy5 from "../../assets/reviews/guy5.png"
import guy6 from "../../assets/reviews/guy6.png"
import guy7 from "../../assets/reviews/guy7.png"

const images = [
    {
        id: 1, 
        url: guy1,
        boyName: "Lukáš",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 2, 
        url: guy2,
        boyName: "Palo",
        reviewText: "Lorem ipsum dolor em im it skap"
    }, 
    {
        id: 3, 
        url: guy3,
        boyName: "Miro",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 4, 
        url: guy4,
        boyName: "Fero",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 5, 
        url: guy5,
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 6, 
        url: guy6,
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    }
    ,
    {
        id: 7, 
        url: guy7,
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    }
]

export default function Reviews() {
  return (
    <div className='reviewPart'>
        <Carousel 
        width={window.innerWidth > 595 ? 600 : 350}
        centerMode={true}
        infiniteLoop={window.innerWidth > 595 ? true : false}
        emulateTouch={window.innerWidth > 595 ? true : false}
        selectedItem={3}
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
