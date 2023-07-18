import LoginForm from "../components/LoginForm"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function LoginPage({setUser}) {
    return (
        <>
        <Container className="my-4">
            <Row>
                <Col sm={6}>
                    <h1 className="my-4">Login</h1>
                    <p>Existing Stream Search users can login below.</p>
                    <p>Users that have not yet created an account should <Link to="/signup">sign-up</Link></p>
                    <LoginForm setUser={setUser}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}