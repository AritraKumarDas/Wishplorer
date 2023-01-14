import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Header() {
    return (
        <Container fluid className="header">
            <Navbar expand="md" variant="dark">
                <Container fluid="md">
                    <Navbar.Brand href="#" className="logo">
                        Wishplorer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='ms-md-3 px-2 nav-item'>Home</Nav.Link>
                            <Nav.Link href="#about" className='ms-md-3 px-2 nav-item'>About</Nav.Link>
                            <Nav.Link href="#login" className='ms-md-3 px-2 nav-item'>Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    )
}

export default Header;