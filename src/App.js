import React, { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import FilterResults from './components/FilterResults'
import axios from 'axios'

const App = () => {

  //Reminder: current state, function that updates it, initial state.
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  //Filter
  const [ filter, setFilter ] = useState('')
  //adding new persons

  const addPerson = (event) => {
    event.preventDefault()
    /* complete the addPerson function for creating new persons */
    const personObject = {
      name: newName,
      number: newNumber,
      //The server will create the id 
      //id: persons.length + 1,
    }

    //Adding the data to the server
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      console.log(response)
         //After concat, the fiel is set to blank again ('').

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    })




/* //Condition
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
} */
  
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))
  const row_names = () => personsToShow.map(person => 
    <p key={person.name}>{person.name} {person.number}</p>
  )


  return (
    <div>
 <Filter value={filter} onChange={handleFilterChange} />

      <Form
      onSubmit={addPerson}
      name={{value: newName, onChange: handlePersonChange}}
      number={{value: newNumber, onChange: handleNumberChange}}

      />

      
      <h2>Numbers</h2>

      {console.log(persons)}
      <ul>
      {persons.map(person => 
      //Pass all the props from person to Person.js
          <Person key={person.id} person={person}  />
         
        )}
      </ul>
      <h2>Filter results</h2>
      <FilterResults persons={row_names()} />
    </div>
  )
}

export default App