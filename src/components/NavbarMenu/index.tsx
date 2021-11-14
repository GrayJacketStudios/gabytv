import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { searchContent } from '../../store/actions/contentActions';
import { updateView } from '../../store/actions/viewActions';
import { RootState } from '../../store/reducers';

export default function NavbarMenu() {
    const dispatch = useDispatch();
    const { contentReducer: { search } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);
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
                        value={search}
                        onChange={(e) => dispatch(searchContent(e.target.value))}
                    />
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
