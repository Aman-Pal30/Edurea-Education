import React from 'react'
import './Campus.css'
import { FaArrowRight } from "react-icons/fa6";
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

function Campus() {
  return (
    <section className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Campus Gallery 1" />
        <img src={gallery_2} alt="Campus Gallery 2" />
        <img src={gallery_3} alt="Campus Gallery 3" />
        <img src={gallery_4} alt="Campus Gallery 4" />
      </div>
      <button className='btn dark-btn'>See more here <FaArrowRight style={{marginLeft: 5}}/></button>
    </section>
  )
}

export default Campus

