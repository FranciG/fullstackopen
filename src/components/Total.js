import React from 'react'

const Total = ({ course }) => {
    //console.log(props)
  
    return (
      <div>
      <ul>
        The total number of exercises is {course.parts.reduce( (sum,exercise) => sum + exercise.exercises, 0)}
        </ul>
      </div>
    )
  }




export default Total
