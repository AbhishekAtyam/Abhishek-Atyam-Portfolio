import './Footer.css'
import React from 'react';
import { FaHome,FaMailBulk,FaPhone,FaLinkedin, FaHackerrank, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
     <div className='footer-container'>
        <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>16-10-227,Old Malakpet</p>
                <p>Hyderabad</p>
            </div>
         </div>
         <div className="phone">
         <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 9618013513
         </h4>
         </div>
        <div className="email">
         <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>atyamabhi@gmail.com
         </h4>
         </div>
         </div>
        <div className="right">
         <h4>Career Objective</h4>
         <p>To obtain an entry-level position in a company where I can use my problem-solving,
critical thinking, and communication skills to contribute for the growth and success of the organization.</p>
        <br></br>
        <div className="social">
        <a href="https://www.linkedin.com/in/abhishek-atyam-027406216/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
    </a>
    <a href="https://www.hackerrank.com/atyamabhi" target="_blank" rel="noopener noreferrer">
    <FaHackerrank size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    </a>
    <a href="https://github.com/AbhishekAtyam" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    </a>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Footer;