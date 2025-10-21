import React from 'react'
import img1 from '/nature.jpeg'

function About() {

    const p1 = {
        color: "red",
        fontSize: "34px",
        fontweight: "bold",
        textdecoration: "underline"        
    };

    const p2 = {
        color: "blue",
        fontSize: "20px"
    };
  return (
    <>
    <h1 style={{color:"red",fontSize:"34px"}}>About Page</h1>
    <p>This is the about page of our React application.</p>
    <p style={p1}>This is a styled paragraph 1.</p>
    <p style={p2}>This is a styled paragraph 2.</p>

    <img src={img1} alt="nature" />
    <br />
    <img src="/nature.jpeg" alt="" />
    <br />
    <img src="https://i.pinimg.com/originals/e7/94/44/e79444b8f14bf120309960569555dbb3.jpg" alt="" />


    </>
  )
}

export default About