import { useState } from 'react';
import { Form, FormGroup, Button, Container } from 'react-bootstrap';
import * as settingsAPI from '../utilities/settings-api';

export default function CountrySelectForm() {

    const [userCountry, setUserCountry] = useState('')

    function getCorrCountryCode(strCountry) {
        const countries = settingsAPI.countries
        let country = countries.find(country => (
            country.name === strCountry 
        ))
        country = country.code
        return country
    }

    function handleChange(evt) {
        const countryCode = getCorrCountryCode(evt.target.value);
        setUserCountry(countryCode);
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault()
        settingsAPI.updateCountry({country: userCountry})
    }

    function getCountries(){
        return settingsAPI.countries
    }
    const countries = getCountries()


    return (
        <>
            <Container>
                <h3 className='mt-4'>Profile settings</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='mb-3'>
                        <Form.Select aria-label="Default select example" onChange={handleChange}>
                            <option>Choose your country</option>
                            {countries.map((country, index) => (
                                <option key={index}>{country.name}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                    <Button variant="primary" type="submit">Update country</Button>
                </Form>
            </Container>
        </>
  );
}