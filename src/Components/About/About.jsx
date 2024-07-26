import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() =>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT INSTITUTION</h3>
            <h2>Nurturing the Future Today</h2>
            <p>Embark on a transformative educational journey with our institutions comprehensive educational programs. Our cutting-edge preparation is designed to empower students with the knowledge,skills and experienced to excel in the dynamic field of education.</p>
            <p>With a focus on innovation,hands-on learning, and personalized mentorship , our programs prepare aspiring educators to make a meaningful impact in classrooms, colleges and communities.</p>
            <p>Whether you are aspiring to be a teacher , administrator, counseilor, or educational leader , our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About
