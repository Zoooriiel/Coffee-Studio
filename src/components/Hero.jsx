import React from 'react'
import heroImage from '../assets/hero-image.jpg'


const Hero = () => {
  return (
    <div className=''>
    <img
      src={heroImage}
      alt="Hero Image"
      className="w-full h-full object-cover"
    />
  </div>
  )
}

export default Hero
