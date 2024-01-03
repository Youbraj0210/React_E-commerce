import React from 'react'
import "./Offer.css"
import exclusiveImg from "../assets/exclusive_image.png"

export const Offer = () => {
  return (
    <div className='Offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
            <img src={exclusiveImg} alt="" />
        </div>
    </div>
  )
}
