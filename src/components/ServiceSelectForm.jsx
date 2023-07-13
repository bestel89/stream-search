import { useState, useEffect, useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import * as settingsAPI from '../utilities/settings-api';
import servicesRequest from '../utilities/services-request';
import streamingData from '../assets/services.json'
import ServiceSelectItem from './ServiceSelectItem';

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

    async function handleSubmit() {

    }

    const serviceSelectItems = Object.keys(streamingData).map((serviceKey, index) => {
        const service = streamingData[serviceKey];
        // console.log(service);
        return <ServiceSelectItem service={service} serviceKey={serviceKey} key={index} />;
      });
    
    return (
        <>
            <Container>
                <h3 className='mt-4'>Service Select</h3>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    {serviceSelectItems}
                </Form>
            </Container>
        </>
  );
}