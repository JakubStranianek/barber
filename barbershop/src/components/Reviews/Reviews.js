import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import guy1 from "../../assets/reviews/guy1.jpg"
import guy2 from "../../assets/reviews/guy2.jpg"
import guy3 from "../../assets/reviews/guy3.jpg"
import guy4 from "../../assets/reviews/guy4.jpg"
import guy5 from "../../assets/reviews/guy5.jpg"

const images = [
    {
        id: 1, 
        url: "../../assets/reviews/guy1.jpg",
        boyName: "Lukáš",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 2, 
        url: "../../assets/reviews/guy2.jpg",
        boyName: "Palo",
        reviewText: "Lorem ipsum dolor em im it skap"
    }, 
    {
        id: 3, 
        url: "../../assets/reviews/guy3.jpg",
        boyName: "Miro",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 4, 
        url: "../../assets/reviews/guy4.jpg",
        boyName: "Fero",
        reviewText: "Lorem ipsum dolor em im it skap"
    },
    {
        id: 5, 
        url: "../../assets/reviews/guy5.jpg",
        boyName: "Atanás",
        reviewText: "Lorem ipsum dolor em im it skap"
    }
]

export default function Reviews() {
  return (
    <Carousel width={300}>
            {images.map((index,img) => (
                <div>
                    <img src={img.url} key={index} alt={img.boyName}></img>
                    <p className="legend">{img.boyName}</p>
                </div>
            ))}

    </Carousel>
  )
}
