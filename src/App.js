import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'
import FilterResults from './components/FilterResults'
import contactService from './services/persons'

//npm run server

const App = () => {




  //Reminder: current state, function that updates it, initial state.

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [contacts, setContacts] = useState([])
  //Filter
  const [ filter, setFilter ] = useState('')
  
  
  //contactService is importer from /services/persons.
  //.getAll is like typing: axios.get('http://localhost:3001/persons')

  //Effect hooks used to fetch data from the server. The data fetched is saved
  //into the contacts state variable
  useEffect(() => {
    
    contactService
    .getAll()
    .then(response => {
      setContacts(response.data)
    console.log(contacts)
      
    
  })
  
  }, [])
/* 
  second parameter of useEffect is used to specify how often the effect
   is run. If the second parameter is an empty array [], 
   then the effect is only run along with the first render of 
   the component. */

  console.log('render', contacts.length, 'contacts')


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
    /* 
    using separate server comunication module from persons.js
     "create" instead of previous code:
    axios
    .post('http://localhost:3001/persons', personObject) 
    
    replaced by:
    
    contactService
    .create(personObject)
    */

    contactService
    //Passing personObject to create
    .create(personObject)
    .then(response => {
      console.log(response)
         //After concat, the fiel is set to blank again ('').
//Updating state after creating, to display created contact.
    setContacts(contacts.concat(personObject))
    setNewName('')
    setNewNumber('')
    })

  
  }
 //Delete contacts
 const deleteContctOf = (id) => {
  console.log('delete contact ' + id + ' ????')
  
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
    ? contacts
    : contacts.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))
  const row_names = () => personsToShow.map(person => 
    <p key={person.name}>{person.name} {person.number} </p>
  )

 

  return (
    <div>
 <Filter value={filter} onChange={handleFilterChange} />

      <Form
      onSubmit={addPerson}
      name={{value: newName, onChange: handlePersonChange}}
      number={{value: newNumber, onChange: handleNumberChange}}
     

      />
 <h2>Numbers from database</h2>
     
   {/*   The contents of the database are stored on the variable contacts.
     I map through the array. Person.js component used.  */}
      <ul>
      {contacts.map(person => 
      //Pass all the props from person to Person.js
      //Here you pass the props
          <Person 
          key={person.id} 
          person={person} 
          deleteContact={() => deleteContctOf(person.id)}
         
          
          />
         
        )}
      </ul>
      <h2>Filter results</h2>
      <FilterResults persons={row_names()} />

    </div>
  )
}

export default App