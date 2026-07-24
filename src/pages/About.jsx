import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
 const navigate = useNavigate()

  return (
    <div>
     About 
    <Link to="/">Go to Home</Link>*
    <a href="/">Go to Home</a>
    <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default About
