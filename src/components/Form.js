import React from 'react'
import './Form.css';
function Form() {
  return (
    <div className="form">
        <form action="mailto:penthala.sahithi@gmail.com" method='post' encType='text/plain' >
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Enter your message'></textarea>
            <button className="btn" type="submit" value="Send">Submit</button>
        </form>

    </div>
  )
}

export default Form