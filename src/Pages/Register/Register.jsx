import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {

    const { createUser, updateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);



        // validation:        

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }



        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                navigate('/')

            })

            .catch(error => {
                console.error(error.message);
                setError(error.message);


            })

        updateProfile()



    }



    return (
        <div>
            <Container className=' mx-auto mb-5 mt-4 mb-4 ' style={{width:400}}>
                <h4>Please Register</h4>
                <Form onSubmit={handleRegister} className='mb-6 border border-secondary-subtle'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="" className='px-5 bg-secondary text-white' type="submit">
                            Register
                        </Button>
                    </div>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <br />
                    <Form.Text className="text-secondary fw-bold ms-2 ">
                        Already have an account <Link to='/login'>Login</Link>
                    </Form.Text>


                </Form>
            </Container>
        </div>
    );
};

export default Register;