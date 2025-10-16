import React,{useState} from 'react'

function About() {
    const [list, setList] = useState([
        {id:1, name:"Ali1", age:17, city: "Prizren" },
        {id:2, name:"Ali2", age:171, city: "Prizren1" },
        {id:3, name:"Ali3", age:172, city: "Prizren2" }
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
