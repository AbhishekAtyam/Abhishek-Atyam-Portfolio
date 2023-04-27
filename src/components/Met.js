import React from 'react';
import './Met.css';
import Abhi from '../assests/abhi.jpeg';
import {NavLink} from 'react-router-dom';
function Cards() {
  return (
    <div className="cards-container">
      <div className="card"> 
        <div className="card_img">
          <img src={Abhi} alt="user" />
        </div>
        <div className="card_info">
          <h2>Abhishek Atyam</h2>
          <p className="career-objective">To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</p>
          <h3 className="skills-list">Skills:</h3>
          <ul className="skills">
            <li>Python</li>
            <li>MERN</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>DSA</li>
            <li>Machine learning</li>
          </ul>
        </div>
      </div>

      <div className="card"> 
        <div className="card_info">
          <h2>Co-curricular Activities</h2>
          <br></br>
          <ul className="come">
            <li >Organized 8 events </li>
            <li>Volunteering</li>
            <li>Photography</li>
            <li> Sports </li>
          </ul>
          <br></br>
          <h2>Strengths</h2>
          <br></br>
          <ul>
            <li>Teamwork</li>
          <li>Strategic Thinking</li>
          <li>Problem Solving</li>
          <li>Leadership skills</li>
          </ul>
        </div>
      </div>

      <div className="card"> 
        <div className="card_info">
          <h2>Achievements</h2>
          <ul className='come'>
            <li>2nd Prize in Coding Contest 
              in Kode Git Fiesta, a coding competition at VRS</li>
            <li>Attained 2nd level in the National level VJ Hackathon, Victory & Joy in Smart Innovations.</li>
            <li>Selected for prestigious Smart India Hackathon through college internal hackathon among over 200 teams.</li>
            <li>Earned a 6-star rating on the HackerRank.</li>
          </ul>
        </div>
      </div>
      <div class="buttons1">
      <NavLink to="https://drive.google.com/file/d/1xWHjsGUexr1dXXovW9LuiII02pNfrcU6/view?usp=drivesdk" className="btn">Download Resume</NavLink>
      <NavLink to="https://drive.google.com/drive/folders/1MVeFQ1nK25ZKvHqY2j3_LUuUgJam0ChJ"className="btn">View Certificates</NavLink>
    </div>

    </div>
  );
}

export default Cards;
