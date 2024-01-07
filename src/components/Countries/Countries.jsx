import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    })
    const visitedCountry = (country) => {
        console.log('visited');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        console.log(country);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }

    return (
        <div>
            <h3>Countries :{countries.length}</h3>
            <div>
                <h5 style={{ fontSize: '15px' }}>Visited Countries : {visitedCountries.length}</h5>
                <div>
                    <ul>
                        {
                            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                    </ul>
                    <div className="flag-container">
                    {
                            visitedFlags.map(flag => <img key={flag.cca3} src={flag}></img>)
                        }
                    </div>
                </div>
            </div>
            {/* display Countries */}
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            visitedCountry={visitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;