import SignUpForm from "../components/SignUpForm"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function AuthPage({ user, setUser }) {

  return (
    <>
      <Container className="my-4">
        <Row>
          <Col sm={6}>
            <h1 className="my-4">Sign-up to Stream Search</h1>
            <p>Users that have not yet created an account should sign-up.</p>
            <p>If you already have an account, <Link to="/login">login here.</Link></p>
            <SignUpForm user={user} setUser={setUser} />
          </Col>
        </Row>
      </Container>
    </>
  )
}