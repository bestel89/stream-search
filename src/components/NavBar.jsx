import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities/users-service';
import { login } from '../utilities/users-api';
import { Link } from 'react-router-dom';

export default function NavLanding({user}) {

    return (
        <>
          <Navbar className="bg-body-tertiary">
            <Container>
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
                    <Button variant="secondary" onClick={logOut}>Log-out</Button>
                  </>
                  :
                  <>
                    <Button variant="primary" href="/login">Log-in</Button>
                  </>
                }
            </Container>
          </Navbar>
        </>
      );
}