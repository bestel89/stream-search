import { Container } from "react-bootstrap"
import CountrySelectForm from "../components/CountrySelectForm"
import ServiceSelectForm from "../components/ServiceSelectForm"
import * as settingsAPI from "../utilities/settings-api"
import { useEffect, useState } from "react"

export default function SettingsPage({user}) {

    return (
        <>
        <Container className="mt-5">
            <h2>Settings</h2>
            <CountrySelectForm />
            <ServiceSelectForm user={user}/>
        </Container>
        </>
    )
}