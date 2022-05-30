import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
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
                                    <Nav.Link ><CustomLink to="/service/:productId">ProductDetail</CustomLink></Nav.Link>
                                    <Nav.Link ><CustomLink to="/manageInventory">ManageItems</CustomLink></Nav.Link>
                                    <Nav.Link ><CustomLink to="/addItems">AddItems</CustomLink></Nav.Link>
                                    <Nav.Link ><CustomLink to="/myItems">MyItems</CustomLink></Nav.Link>
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