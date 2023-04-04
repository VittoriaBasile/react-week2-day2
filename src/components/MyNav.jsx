import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo/logo1.jpg";

const MyNav = () => (
  <Navbar bg="light" variant="light">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img className="logo me-2" src={logo} alt="logo" />
        EpiBooks
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Shop</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
