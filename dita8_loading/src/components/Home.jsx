import React, { useEffect, useState } from 'react'
import './Home.css'
import BlogList from './BlogList'

function Home() {
    const [list, setList] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
         setTimeout(() => {
        fetch('http://localhost:300/list')
       
        .then((response) => 
          response.json())
        .then((data) => {
          setLoading(false);
         setList(data); 
      })
          
        .catch((error) => {
          setError('Error fetching data:',  error  );
          setLoading(false);
        });  
      } , 1000);     
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
    {loading && <p style={{color:'lightblue', fontSize: '20px', animation: } }>Loading...</p>}

    {error && <p style={{color:'red'}}>{error}</p>}
    { list && <BlogList list={list} deleteButton={deleteButton} viewButton={viewButton} />}
      
    </>
   
  )
}

export default Home
