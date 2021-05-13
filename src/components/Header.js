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




export default Header