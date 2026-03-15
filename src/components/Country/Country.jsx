import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    // const {countryName} = {country.name.common}
    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        // console.log('button clicked')
        setVisited(!visited); // keep this line I have qn
        handleVisitedCountries(country);
    }

    return ( 
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? '(Big Country)' : '(Small Country)'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'} 
                {/* keep this line I have qn */}
            </button>
        </div>
     );
}
 
export default Country;