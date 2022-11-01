import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Zerozilla Ecommerce</Navbar.Brand>
          </LinkContainer>

          <Nav>
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/products">Products</Nav.Link>
          </Nav>

          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart fontSize="25px" />
                <Badge bg="light" text="dark">
                  {10}
                </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <span>Cart is empty!</span>
              </Dropdown.Menu>
            </Dropdown>

              <Dropdown.Toggle>
                <FaUserCircle fontSize="25px" />
              </Dropdown.Toggle>
          </Nav>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Zerozilla Ecommerce</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Cart</Nav.Link>
              <NavDropdown title="Logged User" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
