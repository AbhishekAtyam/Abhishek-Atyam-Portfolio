import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Heroimg2 from '../components/Heroimg2.js';
import Form from '../components/Form.js'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="If my profile matches your requirements contact me at:"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact