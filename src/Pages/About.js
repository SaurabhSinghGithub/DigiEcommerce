import React from 'react'
import HeroSection from '../Components/HeroSection'

const About = () => {
  const data = {
    eName: "Ecommerce",
    img: require("../Images/hero2.png")
  }


  return (
    <HeroSection info={data}/>
  )
}

export default About