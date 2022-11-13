import React, { useContext } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import axios from 'axios'
import { config } from '../../config/config'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logout } from '../../services/routes';

const ProfileOptions = () => {

    const { setToken, user } = useContext(UserContext)

    const disconnectUser = () => {
        logout()
        setToken('')
        window.location.reload()
    }

  return (
    
    <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown id="nav-dropdown-dark-example" title="Profile" menuVariant="dark">
                      <NavDropdown.Item href="#action/3.1">
                      <Nav.Link as={Link} to="/profile" className='fs-4 underline text-light'>Ver Perfil</Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <Nav.Link as={Link} to="/orders" className='fs-4 underline text-light'>Orders</Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                      <Nav.Link as={Link} to="/chat" className='fs-4 underline text-light'>Chat</Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        <Nav.Link as={Link} to="/cart" className='fs-4 underline text-light'>Carrito</Nav.Link>
                      </NavDropdown.Item>
                      {
                        (user.role === 'admin') ? 
                          <NavDropdown.Item href="#action/3.3">
                            <Nav.Link as={Link} to="/admin" className='fs-4 underline text-light'>Administrador</Nav.Link>
                          </NavDropdown.Item> 
                         : ''
                      }
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        <Nav.Link onClick={disconnectUser} className='fs-4 underline text-light'>Logout</Nav.Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
  )
}

export default ProfileOptions