import React from 'react'
import './Hero.css' 
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
       <h1><span>I'm Pranav,</span>frontend developer based in UAE</h1>
       <p>I’m Pranav P S, a passionate Frontend Developer with over a year of experience in building responsive and user-friendly applications. Skilled in React, React Native, Swift, Android, and Flutter, I’ve delivered multiple live projects across web and mobile platforms.</p>
       <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume">My Resume</div>
       </div>
    </div>
    
  )
}

export default Hero