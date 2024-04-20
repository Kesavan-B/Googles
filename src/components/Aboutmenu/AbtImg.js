import React from 'react'
import './AbtMenu.css'
import { Link } from 'react-router-dom'

function AbtImg() {
  return (
    <div className="abt-banner">
    <h4 style={{ color: "#fff" }}>
      <span style={{color:'#F60B0E'}}>Home </span> | <Link to='/abt'>About Us</Link>
    </h4>
  </div>
  )
}

export default AbtImg
