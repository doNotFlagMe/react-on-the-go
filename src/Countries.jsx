import { use } from "react";

const Countries = ({countryPromise}) => {
    const countries = use(countryPromise);
    console.log(countries);
    return ( 
        <div>
            <h2>Countries</h2>
        </div>
     );
}
 
export default Countries;