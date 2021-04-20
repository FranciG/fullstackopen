import React from 'react'
//Refactor the code so that it consists of three new components
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course={course} />
      <Content  part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total  totalExercises={exercises1+exercises2+exercises3}/>

      
  
      
  
    </div>
  )
}

export default App
