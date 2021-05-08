import React, { useState } from 'react'





const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
 //Get the leght of the array to generate numbers as long as the array is.
  const dataLenght = anecdotes.length;
  const randomNo = () => Math.floor(Math.random() * dataLenght);
/* UseState: Funtion call to the imported above useState funtion
the component and renders it initialized with the value of randomNo.
The function returns an array that contains two items. 
We assign the items to the variables counter and setCounter by using the destructuring assignment syntax shown earlier.

The select variable is assigned the initial value of state which is  the value of randomNo. 
The variable setSelected is assigned to a function that will be used to modify the state.

When the state modifying function setSelect is called by clicking the button,
React re-renders the component which means that the function body of the component function gets re-executed
*/
  const [selected, setSelected] = useState(randomNo)

  //In this case, the initial state value is an array full of zeroes.
  const [votes, setVotes] = useState(Array(dataLenght).fill(0));
  /* When clicking the button vote, the function vote below is executed,
  passing the current anecdote as a parameter.
  Then a copy of votes array (that is initially only zeroes) is created.
  The position that belongs to the current anecdote is increased by one on each click
  and the new array is set as state, causing the component to re-render.
   */
  const vote = selected => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

  }
  


  return (
    <div>
       <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>

      <p>has {votes[selected]} votes</p>
      <button onClick={() => setSelected(randomNo)}> next anecdote </button>
      <button onClick={() => vote(selected)}>vote</button>
    </div>
  )
}

export default App
