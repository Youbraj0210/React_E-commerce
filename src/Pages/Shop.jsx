import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { Offer } from '../components/Offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}
