import { useState, useEffect, useRef } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import * as settingsAPI from '../utilities/settings-api';
import streamingData from '../assets/services.json'
import ServiceSelectItem from './ServiceSelectItem'
import { useNavigate } from 'react-router-dom';

export default function ServiceSelectForm({user}) {
    const [profile, setProfile] = useState(null)
    const [services, setServices] = useState([
        { name: 'all4', selected: true },
        { name: 'apple', selected: false },
        { name: 'britbox', selected: false },
        { name: 'curiosity', selected: false },
        { name: 'disney', selected: false },
        { name: 'hotstar', selected: false },
        { name: 'iplayer', selected: true },
        { name: 'mubi', selected: false },
        { name: 'netflix', selected: false },
        { name: 'now', selected: false },
        { name: 'prime', selected: false },
        { name: 'uktv', selected: false },
        { name: 'youtube', selected: true }
    ])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        let timer;
        if (isSubmitted) {
          timer = setTimeout(() => {
            setIsSubmitted(false)
          }, 3000)
        }
        return () => clearTimeout(timer)
    }, [isSubmitted])


    useEffect(() => {
        async function getUserData() {
            const foundProfile = await settingsAPI.getProfile(user._id)
            setProfile(foundProfile)
        
            if (foundProfile && foundProfile.services) {
                setServices(foundProfile.services)
          }
        }
        getUserData()
    }, [user])
    
    
    async function handleChange(serviceName, selectedValue) {
        const updatedServices = selectedValue
        ? [...services, serviceName]
        : services.filter(service => service !== serviceName)

        setServices(updatedServices)
    }


    async function handleSubmit(evt) {
        evt.preventDefault()
        setIsSubmitted(true)
        if (profile) {
            const updatedProfile = { ...profile, services: services }
            setProfile(updatedProfile)
            await settingsAPI.updateServices(profile._id, updatedProfile.services)
        }
        navigate('/home')
    }


    const serviceSelectItems = Object.entries(streamingData).map(([serviceName, serviceData]) => (
        <ServiceSelectItem
          service={serviceName}
          supportedStreamingTypes={serviceData.supportedStreamingTypes}
          key={serviceName}
          handleChange={handleChange}
          checked={services.includes(serviceName)}
        />
    ))
    
    
    return (
        <>
          <Container>
            <h3 className="mt-4">Service Select</h3>
            <Alert className="my-3" variant="info">
              All4, Youtube, and BBC iPlayer are free to use in the UK. Stream Search assumes you have access to these services.
            </Alert>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">{serviceSelectItems}</div>
              <Button className="my-3" type="submit">
                Submit
              </Button>
            </Form>
            {isSubmitted && (
                <div className="alert alert-success mt-3">
                Form submitted successfully! Thank you!
                </div>
            )}
          </Container>
        </>
      );
}