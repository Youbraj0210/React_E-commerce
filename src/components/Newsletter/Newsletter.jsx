import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to our newsLetter and stay updated</p>
        <div>
            <input type="email" name="emial" id="email" placeholder='Your EmailId' />
            <button>Subscribe!</button>
        </div>
    </div>
  )
}

export default Newsletter