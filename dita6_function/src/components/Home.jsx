import React from 'react'

function Home() {
    
    const name = "Ali";

    const fun = () => {
        console.log("this is function");
    }

    const fun2 = (x) => {
        console.log("Hello: " + x);
        console.log(`Hello: ${x}`);
    }
  
    const shume = (x, y) => {
        return(x + y);
    }
  
  
  
    return (
 <>
    <h1>Home Page</h1>
    <p>Welcome, {name}!</p>
    <p>{fun()}</p>
    <button onClick={() => fun()}>Kliko</button>
    <button onClick={() => fun2("Ali")}>Kiko2</button>
    <hr />
    <p>Shuma eshte: {shume(5, 10)}</p>
    <button onClick={() => shume(5, 10)}>Shume</button>
</> 
     )
}

export default Home