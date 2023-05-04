import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <Container className='mb-5'>
            <div className='text-center my-4'>
                <img src="/src/image/errorpage.jpg" />
            </div>

            <div>
                <h2 className='text-center mt-5'>
                    <span className='sr-only'>Error</span> {status || 404}

                </h2>
                <p className='text-center'>
                    {error?.message}
                </p>
            </div>
            <div className='text-center '>
                <Button className='fw-bold fs-1' variant="light"><Link to="/" >Back to home page</Link></Button>
                
            </div>

        </Container>
    );
};

export default ErrorPage;