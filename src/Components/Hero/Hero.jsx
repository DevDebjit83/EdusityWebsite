import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a Developed World</h1>
            <p>Our Curriculum is designed to empower students with the knowlegde,skills and experiences needed to excel in the Field of Engineering and Education</p>
            <button className='btn'>Explore us <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
