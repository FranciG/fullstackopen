import React from 'react'
/*1.3: course information step3
Let's move forward to using objects in our application.
 Modify the variable definitions of the App component as follows and 
 also refactor the application so that it still works:*/ 
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      {props.part1}  {props.exercises1}
      </p>
      <p>
      {props.part2}  {props.exercises2}
      </p>
      <p>
      {props.part3}  {props.exercises3}
      </p>
    </div>
  )
}
//The "Total" Component is now looking for a prop that is called "totalExercises"
const Total= ({ totalExercises }) => (
  <p>Number of exercises: {totalExercises}</p> 
  );
 





const App = () => {

  
  const course = 'Half Stack application development'
 //objects
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
        
      <Header  course={course} />
      <Content  part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part2.exercises}/>
      <Total  totalExercises={part1.exercises+part2.exercises+part3.exercises}/>

      
  
      
  
    </div>
  )
}

export default App
