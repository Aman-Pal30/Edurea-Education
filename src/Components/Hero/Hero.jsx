import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <section className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem inventore minus porro recusandae animi iste sint est voluptatibus fugiat aliquid.</p>
        <button className='btn'>Explore more <FaArrowRight className='r-arrow' /></button>
      </div>
    </section>
  )
}

export default Hero
