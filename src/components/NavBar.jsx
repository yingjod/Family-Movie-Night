import React from 'react'

//! Bootstrap import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import family from '../images/familymovienight1.png';


export default function NavBar() {

  return (
    <>
      <Navbar className='navBar' data-bs-theme="dark">
        < Container >
          <Navbar.Brand>
            <img
              alt=""
              src={family}
              width="100"
              // height="60"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={'/'} >Home</Nav.Link>
              <Nav.Link href={'/shows'}>Index</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
    </>

  )
}
