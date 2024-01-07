import { useState } from 'react';
import './Country.css';

const Country = ({ country, visitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams=()=>{
    //     visitedCountry(country);
    // }

    // or
    // const passWithParams2 = () => visitedCountry(country);
    

    return (
        <div className={`country ${visited && 'visited'}`} >
            <h2>Name : {name?.common}</h2>
            <img src={flags?.png} alt="" />
            <h2>Population : {population}</h2>
            <h2>Area : {area}</h2>
            <button onClick={() => visitedCountry(country)}>Visit Add</button>
            <button onClick={()=>handleVisitedFlags(country?.flags?.png)}>Mark flag</button>
            {/* <button onClick={passWithParams2}>Mark</button> */}
            <button onClick={handleVisited}>{!visited ? 'visit' : 'visited'}</button>
            {visited ? 'i have visited' : 'i want to visit'}
        </div>
    );
};

export default Country;