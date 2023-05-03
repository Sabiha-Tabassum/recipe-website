import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
     const {user, logOut} = useContext(AuthContext);

     const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
     }


    return (
        <Container className=' mt-2'>

            <Navbar collapseOnSelect expand="lg" >
                <Container className=''>
                    <Navbar.Brand href="#home" className=''>Chinese Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className=' mt-2 me-2'>Home</Link>
                            <Link to='/blog' className='mt-2 '>Blog</Link>

                        </Nav>
                        <Nav>
                           {
                            user &&  <Link href="#deets" className='mt-2 me-4'>
                                {user.displayName}
                            </Link>
                           }

                           

                               {
                                user ?  <Button onClick={handleLogOut} variant="dark">LogOut</Button> :
                                 <Link to="/login">
                                     <Button variant="dark">LogIn</Button>
                                 </Link>
                               }

                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </Container>


    );
};

export default NavigationBar;