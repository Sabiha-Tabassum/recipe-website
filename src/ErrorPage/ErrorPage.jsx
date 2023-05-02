import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <Container className='mb-5'>
            <div className='my-5 text-center'>
                <img src="/src/image/errorpage.jpg" />
            </div>

            <h2 className='text-center mt-5'>
                <span className='sr-only'>Error</span> {status || 404}

            </h2>
            <p className='text-center'>
                {error?.message}
            </p>
            <div className='text-center'>
                <Link to="/" >Back to home page</Link>
            </div>

        </Container>
    );
};

export default ErrorPage;