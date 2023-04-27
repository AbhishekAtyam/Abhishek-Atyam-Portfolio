import './Heroimg.css'
import React from 'react'
import {Link} from 'react-router-dom';
import second from '../assests/second.jpg'
function Heroimg() {
  return (
    <div className="hero">
        <div className='mask'>
        <img src={second} alt="may be deleted" className="Intro-img"></img>
        </div>
        <div className="content">
          <p>HI, I AM ABHISHEK ATYAM</p>
          <h1>COMPETETIVE PROBLEM SOLVER</h1>
          <br></br>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Heroimg;