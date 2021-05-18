import React, { useState } from 'react'

const App = () => {

  //Reminder: current state, function that updates it, initial state.
  const [ persons, setPersons ] = useState([
    //The array persons is empty at start
  ]) 
  const [ newName, setNewName ] = useState('')

  //adding new persons

  const addPerson = (event) => {
    event.preventDefault()
    /* complete the addPerson function for creating new persons */
    const personObject = {
      name: newName,
  
      id: persons.length + 1,
    }

//Condition
 if (persons.some((person) => person.name === personObject.name) )
 {
    alert("Name already exist");
   
 }
    else
    {
    
    //*/

    setPersons(persons.concat(personObject))
    setNewName('')
  console.log(persons) 
}
  
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {console.log(persons)}
      <ul>
      {persons.map(person => 
          <li key={person.id}>
            {person.name} 
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
