import React, { useState } from 'react'




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const increaseGood = () => setGood(good + 1)
const increaseNeutral = () => setNeutral(neutral + 1)
const increaseBad = () => setBad(bad + 1)



// event handler is supposed to be either a function or a function reference
//Hre, the onClick event handler calls a function reference. 
return (
    <div>
      
      <h1>Give feedback</h1>
      <button onClick={increaseGood}>
        Good
      </button>

      <button onClick={increaseNeutral}>
        Neutral
      </button>
      <button onClick={increaseBad}>
        Bad
      </button>
      <h1>Statistics</h1>
      <p>Good feedback count {good}</p>
      <p>Neutral feedback count count {neutral}</p>
      <p>Bad feedback count {bad}</p>
    </div>
  )
}

export default App
