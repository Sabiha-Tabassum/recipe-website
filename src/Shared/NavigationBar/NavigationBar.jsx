import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container className=' mt-2'>

            <Navbar collapseOnSelect expand="lg" >
                <Container className=''>
                    <Navbar.Brand href="#home" className=''>Chinese Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className=' mt-2'>Home</Link>
                            <Nav.Link href="#pricing" className=''>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='mt-2'>profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" >
                                <Button variant="dark">LogIn</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </Container>


    );
};

export default NavigationBar;