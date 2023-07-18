import { Container, Col, Row, Button } from "react-bootstrap"

export default function NoServices() {

    return (
        <>
            <Container className="my-5 bg-light text-dark" style={{ borderRadius: 10 }}>
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center my-5">
                        <h3 className="my-4">Setup your streaming services</h3>
                        <img className="my-2" src="./services.png" alt="fast-forward-button" width="400" />
                        <p className="my-4 mx-5">Before we can show you what you can watch.</p>
                        <Button variant="primary" href="/settings">Settings</Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}