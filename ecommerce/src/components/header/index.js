import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Header = (props) => {
  const { cartTotalQuantity } = useSelector((state) => state.cartReducer);

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
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => props.searchProducts(e.target.value)}
                />
              </Form>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart fontSize="25px" />
                <Badge
                  bg="light"
                  text="dark"
                  style={{ fontSize: "10px", marginLeft: "0.2rem" }}
                >
                  {cartTotalQuantity}
                </Badge>
              </Nav.Link>
              <NavDropdown
                title={<FaUserCircle />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
