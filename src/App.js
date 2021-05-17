import React, { useState } from 'react'

const App = () => {
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
      //date: new Date().toISOString(),
      //important: Math.random() < 0.5,
      id: persons.length + 1,
    }
  //personObject data is contatenated to the persons array
  //State is updated
    setPersons(persons.concat(personObject))
    setNewName('')
  
  
  
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
