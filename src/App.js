import React, { useState } from 'react'

const App = () => {

  //Reminder: current state, function that updates it, initial state.
  const [ persons, setPersons ] = useState([
    //The array persons is empty at start
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  //adding new persons

  const addPerson = (event) => {
    event.preventDefault()
    /* complete the addPerson function for creating new persons */
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

//Condition
 if (persons.some((person) => person.name === personObject.name) )
 {
    alert("Name already exist");
   
 }
    else
    {
    
    //After concat, the fiel is set to blank again ('').

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  console.log(persons) 
}
  
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
     
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>number: 
        <input 
        value={newNumber}
        onChange={handleNumberChange}
        />
        
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      
      <h2>Numbers</h2>

      {console.log(persons)}
      <ul>
      {persons.map(person => 
          <li key={person.id}>
            {person.name} {person.number} 
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
