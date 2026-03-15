import { use } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({ countryPromise }) => {
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;

    // console.log(countries);
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div className="countries">
                {
                    countries.map((country) => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;