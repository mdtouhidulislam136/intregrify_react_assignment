import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from './Search/Search';

export default function HomePage() {
  return (
    <div>
      <div>
        <div>
          <Navbar variant="dark" bg="primary">
            <Container>
              <Navbar.Brand href="/">Country</Navbar.Brand>
              <Nav>
                <LinkContainer className="nav-bar" to="/">
                  <Nav.Link>
                    <FontAwesomeIcon
                      className="icon"
                      icon="fa-solid fa-house"
                    />
                    Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer className="nav-bar" to="/searchItem">
                  <Nav.Link>Search Data</Nav.Link>
                </LinkContainer>
                <LinkContainer className="nav-bar" to="/countyDetails">
                  <Nav.Link>Country Details</Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
            <Search />
          </Navbar>
        </div>
      </div>
    </div>
  );
}
