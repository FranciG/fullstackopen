import React from 'react'
//deleteContact prps are also needed when adding the delete button
const Person = ({ person, deleteContact }) => {
   console.log("person.js props "+person.id)
   
    return (
      <li> 
        {person.name} {person.number}  
        <button onClick={deleteContact}>Delete</button>
      </li>
    )
  }

  export default Person