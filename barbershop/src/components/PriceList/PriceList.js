import React from 'react'
import "./PriceList.scss"
import pole from "../../assets/pole.png"

export default function PriceList() {
  return (
    <div className='priceList-part'>
        <div className='priceList-Header'>
            <img src={pole} alt="pole"></img>
            <h3>CENNÍK</h3>    
            <img src={pole} alt="pole"></img>
        </div>
       
    </div>
  )
}
