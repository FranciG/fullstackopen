import React, { useState, useEffect } from 'react'
import axios from 'axios'
//setCountries is a function for setting the country's state
const App = () => {
  const [countries, setCountries] = useState([])
//Filter
const [searchFilter, setSearchFilter] = useState('')
  
const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        
      })
  }

  useEffect(hook,[])
/*   by default the effect is always run after the component has been rendered. In our case, however, we only want to execute the effect along with the first render.

  The second parameter of useEffect is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component. */

  console.log('render', countries.length, 'countries')
  console.log(countries)

  const handleClick = () => {
    console.log("click")
    return filteredCountries.map((country) =>
    <p key={country.alpha2Code}>Capital: {country.capital}. Population: {country.population} <img src={country.flag}/></p>
  
    )
  }


/* //To display the countries array data without typing
const showCountries = () => {
 
  return (
    <div>
    <ul>
      {countries.map((country) => 
          <p key={country.alpha2Code}>{country.name}</p>
        )}
      </ul>
    </div>
  )
} */

const filteredCountries =
searchFilter.length === 1
? countries
: countries.filter(
(country) => country.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
)

//showCountries returns either a message or else the contents of filteredcountries array
const showCountries = () => {

/* if (filteredCountries.length === 0) {
    return 'No coincidences found'  
} */
if (filteredCountries.length > 10) {
return 'Too many matches, keep on typing'
}


  if (filteredCountries.length > 0 && filteredCountries.length<10 && filteredCountries.length>1 ) {
    return filteredCountries.map((country) =>
<p key={country.alpha2Code}>{country.name}
{ <button onClick={ handleClick }>
         show
      </button> }  
</p>
)


}
    if (filteredCountries.length === 1) {
      return filteredCountries.map((country) =>
  <p key={country.alpha2Code}>Capital: {country.capital}. Population: {country.population} <img src={country.flag}/></p>

  )
      }    

}
const searchHandler = (e) => {
setSearchFilter(e.target.value)
}

  return (
<div>

<div>
<h1>Countries</h1>
</div>
<div>
Type to find countries: 
<input onChange={searchHandler} />
<div>
{showCountries()}
</div>
</div>

</div>
  );
}

export default App;
