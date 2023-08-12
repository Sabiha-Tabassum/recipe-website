import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <Container className=' mt-2 '>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='' >
                <Container className='navbar'>
                    <Navbar.Brand href="#home" className='fw-bold '>Chinese Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <ul className='d-flex mt-5'>
                                <p className='me-4'>
                                    <NavLink
                                        to='/'
                                        aria-label='Home'
                                        title='Home'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "fw-bold" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink
                                        to='/blog'
                                        aria-label='Blog'
                                        title='Blog'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "fw-bold" : ""
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </p>

                            </ul>

                            {/* <Link to='/' className=' mt-2 me-2'>Home</Link>
                            <Link to='/blog' className='mt-2 '>Blog</Link> */}

                        </Nav>

                        <Nav>
                            {
                                user && <div className='d-flex'>
                                    <div className='me-2 mt-2'>
                                        <Image style={{ height: '40px' }} src={user.photoURL} roundedCircle />
                                    </div>

                                    <div className='mt-2 me-4'>
                                        <p> {user.displayName}</p>
                                    </div>


                                </div>
                            }



                            {
                                user ? <Button onClick={handleLogOut} variant="dark">LogOut</Button> :
                                    <Link to="/login">
                                        <Button variant="dark" className='px-4'>LogIn</Button>
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