import { useState, useEffect, useRef } from 'react';
import { Form, FormGroup, Button, Container } from 'react-bootstrap';
import * as settingsAPI from '../utilities/settings-api';
import servicesRequest from '../utilities/services-request';

export default function CountrySelectForm({user}) {

    const [profile, setProfile] = useState({})
    const [services, setServices] = useState({})

    const setProfileRef = useRef(setProfile)

    useEffect(() => {
        getUserProfile(user._id)
    }, [])
    
    async function getUserProfile(userId) {
        const foundProfile = await settingsAPI.getProfile(userId)
        setProfileRef.current(foundProfile)
    }
    
    async function loadServices(country) {
        const result = await servicesRequest(country)
        console.log(result)
        // setServices(result)
    }
    loadServices(profile.country)
    
    return (
        <>
            <Container>
                <h3 className='mt-4'>Service Select</h3>
                <p>{profile._id}</p>
                <p>{profile.country}</p>
            </Container>
        </>
  );
}