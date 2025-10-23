import React, { useEffect, useState } from 'react'
import './Home.css'
import BlogList from './BlogList'

function Home() {
    const [list, setList] = useState([])
    const [error, setError] = useState(null);

      useEffect(() => {
        fetch('http://localhost:300/list')
        .then((response) => 
          response.json())
        .then((data) => 
          setList(data))
        .catch((error) => 
          setError('Error fetching data:',  error  ));       
      }, []);

      const deleteButton = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
      }
      const viewButton = (id) => {
        const item = list.find((item) => item.id === id);
        setList([item]);
      }



  return (
    <>
    <h1>Welcome to Home page</h1>

    {error && <p style={{color:'red'}}>{error}</p>}
    
        {/* {list.map( (item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
                <hr />

          

        ))} */}
        <BlogList list={list} />
    </>
   
  )
}

export default Home
