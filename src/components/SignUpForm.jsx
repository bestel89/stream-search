import { useState } from "react"
import { signUp } from '../utilities/users-service'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [isSigningUp, setIsSigningUp] = useState(false)
    const navigate = useNavigate()


    const handleChange = (evt) => {
        const { name, value } = evt.target
        setError('')
        const updateState = {
            name: setName,
            email: setEmail,
            password: setPassword,
            confirm: setConfirm
        }
        if (name in updateState) {
            updateState[name](value)
        }
    }


    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            setIsSigningUp(true)
    
            const formData = { name, email, password }
            await signUp(formData)
    
            setIsSigningUp(false)
            navigate("/login")
        } catch {
            setIsSigningUp(false)
            setError('Sign Up Failed - Try Again')
        }
    }


    const disable = password !== confirm || isSigningUp


    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} required placeholder="Enter your full name" />
                <Form.Text>Your name will not be displayed on the website.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleChange} required placeholder="Enter your email address" />
                <Form.Text>We'll never share your email with anyone else</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleChange} required placeholder="Create a password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>
                    Confirm password
                </Form.Label>
                <Form.Control type="password" name="confirm" value={confirm} onChange={handleChange} required placeholder="Confirm your password" />
            </Form.Group>
            <Button className="my-3" type="submit" disabled={disable}>
                {isSigningUp ? 'Signing Up...' : 'Sign Up'}
            </Button>
            {error && <p className="error-message">&nbsp;{error}</p>}
        </Form>
    );
}





// import { Component } from "react";
// import { signUp } from '../utilities/users-service'
// import { Form, Button } from "react-bootstrap"

// export default class SignUpForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: '',
//     }
    
//     handleChange = (evt) => {
//         this.setState({
//           [evt.target.name]: evt.target.value,
//           error: ''
//         });
//     };

//     handleSubmit = async (evt) => {
//         // Prevent form from being submitted to the server
//         evt.preventDefault();
//         try {
//           const formData = {...this.state}
//           delete formData.error
//           delete formData.confirm
//           console.log('log 1')
//           const user = await signUp(formData)
//           console.log(user)
//         //   this.props.navigation.navigate('/login')
//         //   this.props.setUser(user)
//         } catch {
//           // An error occurred 
//           this.setState({ error: 'Sign Up Failed - Try Again' })
//         }
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirm
//         return (
//             <Form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>
//                         Name
//                     </Form.Label>
//                     <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder="Enter your full name" />
//                     <Form.Text>Your name will not be displayed on the website.</Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>
//                         Email address
//                     </Form.Label>
//                     <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="Enter your email address" />
//                     <Form.Text>We'll never share your email with anyone else</Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>
//                         Password
//                     </Form.Label>
//                     <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required placeholder="Create a password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//                     <Form.Label>
//                         Confirm password
//                     </Form.Label>
//                     <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder="Confirm your password" />
//                 </Form.Group>
//                 <Button className="my-3" type="submit" disabled={disable}>Sign-up</Button>
//                 <p className="error-message">&nbsp;{this.state.error}</p>
//             </Form>
//         )
//     }
// }