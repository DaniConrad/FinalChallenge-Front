import React, { useContext } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import ProfileOptions from './ProfileOptions';

const NavbarD = () => {

  const { user } = useContext(UserContext)

    return( 
      <header className="App-header">
          <Navbar className='nav-back-color' expand="lg">
              <Container>
                <Navbar.Brand className='text-light'>
                  { user.name }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className='fs-4 underline text-light'>Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/auth" className='fs-4 underline text-light'>Login</Nav.Link>
                    <Nav.Link as={Link} to="/products" className='fs-4 underline text-light'>Productos</Nav.Link>
                    <Nav.Link as={Link} to="/cart" className='fs-4 underline text-light'>Carrito</Nav.Link>
                    { user ? <ProfileOptions /> : '' }
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      </header>
)};


export default NavbarD;