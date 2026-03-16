import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({ countryPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country)=>{
        console.log('Visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags=(flag)=>{
        console.log('visited flag btn clicked');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    const countriesData = use(countryPromise);
    const countries = countriesData.countries;

    // console.log(countries);
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h2>Total Visited Flags: {visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map((country)=> <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="flag-visited-container">
                {
                    visitedFlags.map((flag, i)=> <img key={i} src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map((country) => <Country 
                    key={country.cca3.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;