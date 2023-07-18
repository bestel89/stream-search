import { Container, Row, Col, Button } from "react-bootstrap"
import CountrySelectForm from "../components/CountrySelectForm"
import ServiceSelectForm from "../components/ServiceSelectForm"

export default function SettingsPage({user}) {

    
    return (
        <>
        <Container className="mt-5">
            <Row>
                <Col sm={6}>
                    <div className="d-flex align-content-center">
                        <Button variant="link" href="/home" className="me-2"><img className="" src="./back.png" alt="back button" width="24"/></Button>
                        <h2>Settings</h2>
                    </div>
                    <CountrySelectForm />
                    <ServiceSelectForm user={user}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}