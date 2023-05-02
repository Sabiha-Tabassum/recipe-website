import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container className='bg mt-2'>

            <Navbar collapseOnSelect expand="lg" >
                <Container className=''>
                    <Navbar.Brand href="#home" className='text-white'>Chinese Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className='text-white mt-2'>Home</Link>
                            <Nav.Link href="#pricing" className='text-white'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='text-white mt-2'>profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" >
                                <Button variant="dark">LogIn</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='text-white my-5 pt-5'>
                <h4>At foodies, we take food seriously then everything else. <br /> We come up with weekly recipes of  every <br /> kind of food to fulfill your cravings.</h4>
            </div>
        </Container>


    );
};

export default NavigationBar;