import React from 'react'
/*1.4: course information step4
And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:*/ 
const Header = (props) => {
  console.log(props)
  //I pass the whole object (course) as props and use only name
  return (
    <div>
    {   <h1>{props.course.name}</h1> }
    </div>
  )
}





const Content = (props) => {
  console.log(props);
   //I pass as props only the array parts from the object course (course.parts)
  return <div>
    <p>
      {props.content[0].name} {props.content[0].exercises}
    </p>
    <p>
      {props.content[1].name} {props.content[1].exercises}
    </p>
    <p>
      {props.content[2].name} {props.content[2].exercises}
    </p>
    </div>;
};
//Getting the data from the array without looping through it.
 const Total = (props) => {
    console.log(props);
     //I pass as props only the array parts from the object course (course.parts)
    return <div>
      <p>
        
      Number of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
      </p>
      </div>;
  };




  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
    
  return (
    <div>
        
      <Header  course={course} />
      <Content content={course.parts}/>
      <Total parts={course.parts}/>
      
  
      
  
    </div>
  )
}

export default App
