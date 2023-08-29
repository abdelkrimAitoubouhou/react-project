import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {withRouter} from "./WithRouter";
import {useNavigate} from "react-router-dom";
import logo from '../images/logo.png';


function Header() {
    const navigate = useNavigate();
    return (
        <div className="headerNav">

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <img className="logo" src={logo} alt={"wait for it"}/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        id="navBar"
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={()=> navigate("/patient-list")}>Home</Nav.Link>
                        <NavDropdown title="Actions" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/add-patient">Add student</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">Update student</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Delete student</NavDropdown.Item>


                            <NavDropdown.Divider />
                        </NavDropdown>

                        <Nav.Link href="#" >
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    );
}

export default Header;