import React from 'react'
import './Home.css'


function Home() {

    const fun = () => {
        console.log("HEllo World!!!");
    }

    const fun2 = (name) => {
        console.log("Hello" + name);
          console.log(`Hello ${name}`);
        
    }

    const style = {
        color: "pink",
        background: "black",
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px"

    }

  return (
    <>
        <h1>Home Page</h1>
        <p>{ fun()}</p>
        <button onClick={fun}>Kliko</button>
        <button onClick={() => fun2("Ali")}>Kliko 2</button>

        <h2 style={style}>Styling in React</h2>
        <p style={style}>Shkolla Digjitale</p>
        <p className='text'>Prizren</p>
    </>
  )
}

export default Home