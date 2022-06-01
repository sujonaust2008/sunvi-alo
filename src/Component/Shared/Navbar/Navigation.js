import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from './CustomLink';

const Navigation = () => {
    const [user]= useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sunvi Alo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <div className='d-flex'>
                                <Nav.Link><CustomLink to="/">Home</CustomLink></Nav.Link>
                                <Nav.Link><CustomLink to="/blogs">Blogs</CustomLink></Nav.Link>
                                {
                                    user && <>
                                    <Nav.Link ><CustomLink to="/manufacturer/:productId">ProductDetail</CustomLink></Nav.Link>
                                    <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link to="/dashboard">My Orders</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"><Link to="/dashboard/profile">My Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link to="/dashboard/reviews">My Reviews</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    
                                    </>
                                }
                                <Nav.Link><CustomLink to="/myportfolio">My Portfolio</CustomLink></Nav.Link>
                            </div>
                            <div>
                                <Nav.Link>{user?
                                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-white">SignOut <img className='photoURL' src={user?.photoURL} alt={user?.displayName}/></button>:
                                <CustomLink to="/login">LogIn</CustomLink>}</Nav.Link>
                            </div>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;