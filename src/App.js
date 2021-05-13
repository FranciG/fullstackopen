import React from 'react'
import Total from './components/Total'
import Header from './components/Header'
import Courses from './components/Courses'

//Each component has it's own file, where is exported, and then, imported here where they are used.


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


    
   // totalAmount = course.parts.reduce( (sum,exercise) => sum + exercise.exercises, 0)




  
    
   return (
    <div>
        
      <Header  course={course} />
       
      <Courses  course={course} />

      <Total  course={course} />
    
      
  
      
  
    </div>
  ) 
}

export default App
