import React, { useState } from 'react'
  /* 1.10: unicafe step5
Let's continue refactoring the application. Extract the following two components:

Button for defining the buttons used for submitting feedback
Statistic for displaying a single statistic, e.g. the average score.
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
        <table>
        <tbody>
      <p>Good feedback count {good}</p>
      <p>Neutral feedback count count {neutral}</p>
      <p>Bad feedback count {bad}</p>
      <p>Total feedback  {total}</p>
      <p>Average  {average}</p>
      <p>Positive  {positive} %</p>
      </tbody>
      </table>
    </>
  );
};


/* Button component for the buttons of our application. We have to pass the event handler as well as the title of the button through the component's props
 */  const Button = (props) => {
    console.log(props)
    return (
    <div>
      
     
      <button onClick={props.onClick}>{props.text}</button>

    </div>
  );
};



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)
 
 const increaseGood = () => setGood(good + 1)
 const increaseNeutral = () => setNeutral(neutral + 1)
 const increaseBad = () => setBad(bad + 1)
 

return (
    <div>
       <h1>Give feedback</h1>
       <Button onClick={increaseGood} text="Good" />
       <Button onClick={increaseNeutral} text="Neutral" />
       <Button onClick={increaseBad} text="Bad" />
     
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
