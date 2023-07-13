import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function LoginForm({ setUser }) {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials)
      setUser(user)
      navigate("/home")
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
      <>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder='Enter your email address'name="email" value={credentials.email} onChange={handleChange} required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required/>
            <Form.Text className="text-muted">
              By logging in and signing-up, you accept our Terms & Conditions.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          
            {/* <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button type="submit">LOG IN</button>
        <p className="error-message">&nbsp;{error}</p> */}
        </Form>
      </>
  );
}