import React,{useState} from 'react'

function About() {
    const [list, setList] = useState([
        
    ])
  return (
    <>
    <h1>Welcome to about page</h1>
    <div>
        {list.map( (item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
                <hr />

            </div>

        ))}
    </div>
    </>
   
  )
}

export default About
