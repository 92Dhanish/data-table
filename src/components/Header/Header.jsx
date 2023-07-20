import { NavLink, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css' 

function Header() {
  return (
    <>
      <Navbar >
        <Container>
          <Navbar to="home">Navbar</Navbar>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/View">Viewcontact</Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;