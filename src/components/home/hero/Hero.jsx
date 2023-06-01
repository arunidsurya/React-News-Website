import React, { useState } from 'react'
import {hero} from "../../../dummyData"
import HeroCard from './HeroCard';
import './hero.css'


const Hero = () => {
    const [items,setitems]=useState(hero);
  return (
    <>
     <section className="hero">
        <div className="container">
            {items.map((item)=>{
                return (
                  <HeroCard item={item} />
                )
            })}
        </div>
        </section> 
    </>
  )
}

export default Hero
