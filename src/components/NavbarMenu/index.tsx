import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updateView } from '../../store/actions/viewActions';

export default function NavbarMenu() {
    const dispatch = useDispatch();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link onClick={() => dispatch(updateView('home'))}>Home</Nav.Link>
                    <NavDropdown title="Content type" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Films</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Series</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Programs</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Commercial Spots</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Content..." id="navbarScrollingDropdown">
                        <NavDropdown.Item onClick={() => dispatch(updateView('addContent'))}>Add content</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Edit content</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Delete content</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
