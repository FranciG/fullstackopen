import React from 'react'


const Header = (props) => {
  //console.log(props)
  //I pass the whole object (course) as props and use only name
  return (
    <div>
    {   <h1>{props.course.name}</h1> }
    </div>
  )
}

const Courses = ({ course }) => {
  //console.log(props)
  //I pass the whole object (course) as props
  return (
    <div>
    <ul>
      {course.parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>
    </div>
  )
}

  const App = () => {
    
    const course = {
      id: 1,
      name: 'Half Stack application development',
    
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]

      
    }


    const totalAmount = course.parts.reduce(function (sum,exercise) {
      return sum + exercise.exercises
    }, 0)
    console.log(totalAmount)





  
    
   return (
    <div>
        
      <Header  course={course} />
       
      <Courses  course={course} />
    
      
  
      
  
    </div>
  ) 
}

export default App
