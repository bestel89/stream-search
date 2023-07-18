import { useState } from 'react';
import { Form, FormGroup, Button, Container, Alert } from 'react-bootstrap';
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
        const countryCode = getCorrCountryCode(evt.target.value)
        setUserCountry(countryCode)
    }


    async function handleSubmit(evt) {
        evt.preventDefault()
        await settingsAPI.updateCountry({ country: userCountry })
    }

    
    function getCountries(){
        return settingsAPI.countries
    }
    const countries = getCountries()


    return (
        <>
            <Container>
                <h3 className='mt-4'>Profile settings</h3>
                <Alert className="my-3" variant="info">
                        Stream Search is in BETA. We currently only support users and searches in the United Kingdom.
                </Alert>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='my-3'>
                        <Form.Select aria-label="Default select example" onChange={handleChange} disabled>
                            <option>United Kingdom</option>
                            {countries.map((country, index) => (
                                <option key={index}>{country.name}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                    <Button variant="secondary" type="submit" disabled>Update country</Button>
                </Form>
            </Container>
        </>
  );
}