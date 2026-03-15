import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({ countryPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country)=>{
        console.log('Visited country clicked', country);
    }
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;

    // console.log(countries);
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h2>Total Country Visited: </h2>
            <div className="countries">
                {
                    countries.map((country) => <Country 
                    key={country.cca3.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;