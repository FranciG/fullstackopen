import React from 'react'
/*1.4: course information step4
And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:*/ 
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

/* const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      {props.name}  
      </p>
    </div>
  )
} */



const Content = (props) => {
  //console.log(props.parts);
  return props.parts.map(item => (
    <div>{item.name} {item.exercises}</div>
    
  ))
};


 const Total = (props) => {
    console.log(props);
    return <div>
      <p>
        
      Number of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
      </p>
      </div>;
  };




const App = () => {

  
  const course = 'Half Stack application development'
 //array
 const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

/* parts.forEach(value => {
  console.log(value)   */
/* })  */
  //pass the parts array to the Content component. In order to receive the props
  return (
    <div>
        
      <Header  course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      
  
      
  
    </div>
  )
}

export default App
