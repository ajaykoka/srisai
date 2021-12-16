import React from 'react'
import logo from '../assets/images/logo.png'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg">
         <Container>
          <Navbar.Brand href="#home">
              <img src= { logo }
               width="30"
               height="30"
               className="d-inline-block align-top"
              alt="" />              
              Sri Sai Pooja Stores</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>   
            </Nav>
            <Nav >
                <Nav.Link href="#link"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header