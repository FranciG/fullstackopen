import React from 'react';
import ReactDOM from 'react-dom';
/* import axios from 'axios' */
import App from './App';


/* Storing the promise object in a variable is generally unnecessary, and it's instead common to chain the then method call to the axios method call
const promise = axios.get('https://restcountries.eu/rest/v2/all') 
//console.log(promise)
/* to access the result of the operation represented by the promise, we must register an event handler 
to the promise. This is achieved using the method then: 
promise.then(response => {
  console.log(response)
})
*/


/* axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response => {
    const countries = response.data
    console.log(countries)
  }) */
ReactDOM.render(
  <React.StrictMode>
    <App 
    
    
    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

