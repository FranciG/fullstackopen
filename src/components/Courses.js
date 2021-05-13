import React from 'react'



const Courses = ({ course }) => {
  //Destructure course
  const { parts } = course;
  //console.log(props)
 
  return (
    <div>
    <ul>
      {parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>
    </div>
  )
}


export default Courses


