import React from 'react'
import HeroSection from '../Components/HeroSection';
import Transport from '../Components/Transport';
import People from '../Components/People';
import Featured from '../Components/Featured';

const Home = () => {

  const data = {
    eName: "Store",
    img: require("../Images/hero1.png")
  }

  return (
    <>
      <HeroSection info={data} />
      <Featured />
      <Transport />
      <People />
    </>

  )
}

export default Home;