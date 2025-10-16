import React from 'react'

function BlogList(props) {
    const list = props.list
    const delete
  return  (
    <>
     {list.map( (item) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
                <hr />
                <button>Delete</button>
            </div>))}   
  </>

            )      
  }  

export default BlogList