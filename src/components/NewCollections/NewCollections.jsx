import React from 'react'
import "./NewCollections.css"
import New_collection from "../assets/new_collections"
import { Items } from "../Items/Items";

const NewCollections = () => {
  return (
    <div className='NewCollections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {
                New_collection.map((prod,index)=>(
                    <Items key={prod.id} id={prod.id} name={prod.name} image={prod.image} new_price={prod.new_price} old_price={prod.old_price}/>
                ))
            }
        </div>
    </div>
  )
}

export default NewCollections