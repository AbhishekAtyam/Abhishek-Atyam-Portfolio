import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Heroimg2 from '../components/Heroimg2.js';
import Met from '../components/Met.js';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Iam a competitive Problem solver"/>
      <br></br>
      <Met/>
      <br></br>
      <Footer/>
    </div>
  )
}

export default About