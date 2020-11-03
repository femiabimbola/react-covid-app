import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api'
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    
    const [fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const countriesApi  = async () => setFetchedCountries(await countries());

        countriesApi();
    }, [setFetchedCountries] )

    return ( 
        <FormControl className = {styles.formControl}>
            <NativeSelect> 
                <option value = "global"> Global </option>
                {fetchedCountries.map((country) => <option>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;