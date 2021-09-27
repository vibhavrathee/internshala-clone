import React from 'react'
import {useRef} from 'react'
import './navbar.css'
import { Navbar, Container, Nav, NavDropdown, Button, Dropdown, Badge } from 'react-bootstrap'
export default function MyNavbar() {
    return (
        <Navbar className="mb-2 myNavbar" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">
                    <img className="logo" src="https://internshala.com/static/images/common/new_internshala_logo.svg"/>
                </Navbar.Brand>
                <Dropdown className="d-lg-none mx-5">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Register
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <NavDropdown title="Internships" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Online Training" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link className="" href="#home">{' '}Fresher Jobs {' '}
                            <Badge bg="warning" text="light">
                                80% off
                            </Badge>
                        </Nav.Link>
                        
                        <Button className="mx-2 px-3 d-none d-lg-inline" size="sm" variant="outline-info">Login</Button>
                        <Button className="mx-2 px-3 d-none d-lg-inline" size="sm" variant="success">Register</Button>
                        {/* <Dropdown className="mr-4 d-none d-lg-inline">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Register
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
