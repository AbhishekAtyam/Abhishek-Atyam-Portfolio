import './Workcard.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
const Workcard=(props)=> {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="ok"></img>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details"><p>{props.text}</p></div>
    <div classname="pro-btns">
      <div className="pig">
    <NavLink to={props.GITHUB} className="btn">Github</NavLink>
    </div>
    </div>
 </div>
  )
};

export default Workcard