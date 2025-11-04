import React from 'react'

function BlogList(props) {
    const list = props.list;
    const deleteButton = props.deleteButton;
    const viewButton = props.viewButton;
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Id</th>
        </tr>
      </thead>
    <tbody>
         {list.map((item) => (
                <td key={item.id}>
                    <td>{item.name}</td>
                    <td>Age: {item.age}</td>
                    <td>City: {item.city}</td>
                    <td>
                       <button onClick={() => deleteButton(item.id)}>Delete</button>
                    <button onClick={() => viewButton(item.id)}>View</button>
                    </td>
                   
                    {/* <hr /> */}
                </td>
        ))}
        </tbody>
        </table>
    </>
  )
}

export default BlogList