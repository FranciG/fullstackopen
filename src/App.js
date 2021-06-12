import React, { useState, useEffect } from 'react'
import axios from 'axios'
//setCountries is a function for setting the country's state
const App = () => {
  const [countries, setCountries] = useState([])
//Filter
const [searchFilter, setSearchFilter] = useState('')

//Update state with button
const [selectedCountry, setSelectedCountry] = useState('')
  
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



  //When button es clicked the state is set, and the state variable is used

  const renderCountryDetails = () => {
    return (
      selectedCountry && (
        <p key={selectedCountry.alpha2Code}>
       <p>   Capital: {selectedCountry.capital}.</p>
       <p>  Population:{" "}
          {selectedCountry.population}</p> 

          <p>
            <img src={selectedCountry.flag} style={{ width: '200px'}}/>
</p> 
        
<h3>Languages</h3>
<p>      {selectedCountry.languages.map(language => <li key={language.name}>{language.name}</li>)}



</p>



</p>


      )
    );
  };



const filteredCountries =
searchFilter.length === 1
? countries
: countries.filter(
(country) => country.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
)

//showCountries returns either a message or else the contents of filteredcountries array
const showCountries = () => {


if (filteredCountries.length > 10) {
return 'Too many matches, keep on typing'
}


if (filteredCountries.length > 0 
    && filteredCountries.length<10 
    && filteredCountries.length>1 ) 
    {
      return (
        <div>
          {filteredCountries.map((country) => (
            <p key={country.alpha2Code}>
              {country.name}
              {
                //Update stste when button is clicked, passing country as a prop to the state
                //onClick state is updated, causing the page to refresh and executing renderCountryDetails
                //that uses the set state (the country) to render the info.
                <button onClick={
                  () => setSelectedCountry(country)}>
                  show
                </button>
              }
            </p>
          ))}
          <div>{renderCountryDetails()}</div>
        </div>
      );
    }
    
    

    if (filteredCountries.length === 1) {
      return filteredCountries.map((country) =>

      
  <p key={country.alpha2Code}>
    <p>Capital: {country.capital}.
    <p> Population: {country.population} </p> 
    <h3>languages</h3>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}

    <p><img src={country.flag} style={{ width: '200px'}}/>
    </p> 
    
    </p>
    </p>

  )
      }
    } 
     


const searchHandler = (e) => {
  //setSelectedCountry state is set to empty
  setSelectedCountry("");
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
