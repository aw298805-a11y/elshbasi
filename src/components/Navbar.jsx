import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../assets/logo.jpg";
import "./Navbar.css";
import { Link, Links } from "react-router";

const NavbarSt = () => {
  return (
    <div className="navbar-container">
      <Navbar expand="lg">
        <Container>
          <a href="../app.jsx">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center per-3 w-100 nav-links">
              <Nav.Link className="link active" as={Link} to="/">
                الرئيسية
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/trips">
                الرحلات
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/contact">
                اتصال
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/aboutus">
                معلومات عنا
              </Nav.Link>
            </Nav>
            <Form.Select className="select-language">
              <option>عربي</option>
            </Form.Select>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSt;
