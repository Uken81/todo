import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router"
import { UserAuth } from './Firebase/AuthContextProvider';

export const SigninPage = () => {
    const { createUser, signIn, user } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          setEmail(e.target.value);
        }
    
        if (e.target.name === 'password') {
          setPassword(e.target.value);
        }
      };

    const handleSignup = async () => {
        await createUser(email, password)
        .then(() => {
          console.log('user has signed up');
          navigate('/todo');
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log('error: ', errorMessage);
        });
        console.log('user', user);      
    };

    const handleSignin = async (event) => {
        event.preventDefault();
        await signIn(email, password)
        .then(() => {
            console.log('user signed in');
            navigate('/todo');
        })
        .catch((e) => {
            console.log('error', e.errorMessage);
        })        
        console.log('user', user);
        console.log('email', email);
        console.log('password', password);
    }

    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h1>Signin</h1>
                <Form >
                    <Form.Group className="sign-in-form" controlId="sign-in-email">
                        <Form.Control
                            type="email"
                            name="email"
                            aria-label="email"
                            value={email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="sign-in-form" controlId="sign-in-password">
                    <Form.Control
                        type="password"
                        name="password"
                        aria-label="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    </Form.Group>
                </ Form>
                <Button size="sm" variant="outline-primary" onClick={handleSignin}>Sign In</Button>
                <Button size="sm" variant="outline-primary" onClick={handleSignup}>Sign Up</Button>
        </div>
    )
}