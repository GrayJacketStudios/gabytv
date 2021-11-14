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
                        <NavDropdown.Item onClick={() => dispatch(updateView('viewFilms'))}>Films</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => dispatch(updateView('viewSeries'))}>Series</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => dispatch(updateView('viewPrograms'))}>Programs</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => dispatch(updateView('viewCSpots'))}>Commercial Spots</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => dispatch(updateView('addContent'))}>Add content</Nav.Link>
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
