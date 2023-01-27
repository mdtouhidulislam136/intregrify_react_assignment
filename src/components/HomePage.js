import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


export default function HomePage() {
  return (
    <div>
      <div>
        <div>
          <Navbar variant="dark" bg="primary">
            <Container>
              <Navbar.Brand href="/">Country</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
