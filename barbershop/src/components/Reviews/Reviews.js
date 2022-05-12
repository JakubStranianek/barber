import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import "./Reviews.scss"

const images = [
    {
        id: 1, 
        url: "/reviews/guy1.png",
        boyName: "Lukáš",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 2, 
        url: "/reviews/guy2.png",
        boyName: "Palo",
        reviewText: "Lorem ipsum dolor em im it skap"
    }, 
    {
        id: 3, 
        url: "/reviews/guy3.png",
        boyName: "Miro",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 4, 
        url: "/reviews/guy4.png",
        boyName: "Fero",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 5, 
        url: "/reviews/guy5.png",
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 6, 
        url: "/reviews/guy6.png",
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    }
    ,
    {
        id: 7, 
        url: "/reviews/guy7.png",
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    }
]

export default function Reviews() {
  return (
    <div className='reviewPart'>
        <Carousel 
        width={600}
        centerMode="true"
        infiniteLoop="true"
        emulateTouch="true"
        selectedItem={3}
        showArrows={false}
        thumbWidth={60}
        >
                {images.map((index) => (
                    <div>
                        <img src={index.url} key={index} alt={index.boyName} className="reviewGuy"></img>
                    </div>
                ))}

        </Carousel>
    </div>
  )
}
