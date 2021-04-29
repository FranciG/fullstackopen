import React, { useState } from 'react'
  /* 1.7: unicafe step2
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

1.8: unicafe step3
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

Remember that components should not be defined inside other components:
 */
 const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const sumGoodBad = good + bad;
  const average = Math.round(((good - bad) / sumGoodBad) * 100) / 100;
  const positive = Math.round((good / sumGoodBad) * 100);


   if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } 

  return (
    <>
        <h1>Statistics</h1>
      <p>Good feedback count {good}</p>
      <p>Neutral feedback count count {neutral}</p>
      <p>Bad feedback count {bad}</p>
      <p>Total feedback  {total}</p>
      <p>Average  {average}</p>
      <p>Positive  {positive} %</p>
    </>
  );
};



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const increaseGood = () => setGood(good + 1)
const increaseNeutral = () => setNeutral(neutral + 1)
const increaseBad = () => setBad(bad + 1)




// event handler is supposed to be either a function or a function reference
//Here, the onClick event handler calls a function reference. 
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
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
