import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css"; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Ansh Jain. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
