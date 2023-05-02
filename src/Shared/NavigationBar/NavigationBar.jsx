import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
         <Container className='bg mt-2'>
            
            <Navbar collapseOnSelect expand="lg" >
            <Container className=''>
                <Navbar.Brand href="#home" className='text-white'>Chinese Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#pricing" className='text-white'>Blog</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className='text-white'>More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='text-white'>
                            Dank memes
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