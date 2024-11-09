import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/playicon.png'

function About({setPlayState}) {
  return (
    <section className='about '>
      <div className="about-left">
        <img src={aboutimg} alt="About Image" className='about-img'/>
        <img src={playicon} alt="About Image" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quia nisi at explicabo nulla, distinctio animi quae sint quidem mollitia nam maiores sit vel voluptas totam modi repellat laborum? Fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quia nisi at explicabo nulla, distinctio animi quae sint quidem mollitia nam maiores sit vel voluptas totam modi repellat laborum? Fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quia nisi at explicabo nulla, distinctio animi quae sint quidem mollitia nam maiores sit vel voluptas totam modi repellat laborum? Fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </section>
  )
}

export default About
