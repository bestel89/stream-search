import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities/users-service';
import { login } from '../utilities/users-api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavLanding({user, setUser}) {

  const navigate = useNavigate()

  function logoutUser() {
    logOut()
    setUser(null)
    navigate('/')
  }

  return (
      <>
        <Navbar className="bg-body-tertiary">
          <Container className="d-flex">
              <Navbar.Brand href="/home">
                  <img
                  src="./icon-white.svg"
                  width="100"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  />
              </Navbar.Brand>
              { user ?
                <>
                  <div>
                    <Button variant="secondary" href="/settings" className="me-3">Settings</Button>
                    <Button variant="secondary" onClick={logoutUser}>Log-out</Button>
                  </div>
                </>
                :
                <>
                  <Button variant="primary" href="/login">Log-in</Button>
                </>
              }
          </Container>
        </Navbar>
      </>
    )
}