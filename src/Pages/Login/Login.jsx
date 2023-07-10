import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import './Login.css';

const Login = () => {

    const { signIn, popUpSignIn, gitHubSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    // sign in with popup


    const handleGoogleSignIn = () => {
        popUpSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    // sign in with github pop up:

    const handleGithubeSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <Container className='mx-auto w-50 mt-4 mb-4 border border-secondary-subtle container'>
            <h4>Please Login</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 form1" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
               
                <div className='text-center'>
                    <Button className='px-5 bg-secondary text-white' variant="" type="submit">
                        Login
                    </Button>
                </div>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />
                <Form.Text className="text-secondary fw-bold">
                    Don't have an account <Link to='/register'>Register</Link>
                </Form.Text>
                <hr />

                <ListGroup className='mb-2'>

                    <Button onClick={handleGoogleSignIn} variant="" className='mb-2 bg-secondary '> <ListGroup.Item><FaGoogle></FaGoogle> <span className='ms-4 fw-bold button1'>Goggle SignIn</span></ListGroup.Item></Button>

                    <Button onClick={handleGithubeSignIn} variant="" className='bg-secondary'><ListGroup.Item><FaGithub></FaGithub> <span className='ms-4 fw-bold button2'>GitHub SignIn</span> </ListGroup.Item></Button>


                </ListGroup>


            </Form>
        </Container>
    );
};

export default Login;