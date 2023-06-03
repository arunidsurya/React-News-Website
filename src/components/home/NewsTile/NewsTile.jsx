import React, { useState } from 'react'
import {hero} from "../../../dummyData"
import NewsCard from './NewsCard';
import './newstile.css'


const NewsTile = () => {
    const [items,setitems]=useState(hero);
  return (
    <>
     <section className="hero">
        <div className="container">
            {items.map((item)=>{
                return (
                  <NewsCard item={item} />
                )
            })}
        </div>
        </section> 
    </>
  )
}

export default NewsTile
