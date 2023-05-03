import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {

    const { createUser, updateProfile } = useContext(AuthContext);

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

        if(password.length < 6){
            setError('Please add at least 6 characters in your password')
            return;
         }

     

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                
            })

            .catch(error => {
                console.error(error.message);
                setError(error.message);
                

            })

            updateProfile()

           

    }



    return (
        <div>
            <Container className='w-25 mx-auto mb-5 mt-4 mb-4 border border-secondary-subtle'>
                <h4>Please Register</h4>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                   
                    <Button variant="dark" type="submit">
                        Register
                    </Button>
                    <br />
                    
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <br />
                    <Form.Text className="text-secondary">
                        Already have an account <Link to='/login'>Login</Link>
                    </Form.Text>


                </Form>
            </Container>
        </div>
    );
};

export default Register;