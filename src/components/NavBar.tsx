import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";

class NavBar extends Component<RouteComponentProps> {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
          <img
            src="https://res.cloudinary.com/dhmw620tl/image/upload/v1613046881/benchmark3/dance_tzx91z.gif"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Ya</Nav.Link>
            <Nav.Link>Like</Nav.Link>
            <NavDropdown title="Jazz?" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <img
                  src="https://res.cloudinary.com/dhmw620tl/image/upload/v1611939158/benchmark3/ln3hmkigunqujogxljnn.gif"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
          <img
            src="https://res.cloudinary.com/dhmw620tl/image/upload/v1611750739/benchmark3/o9epvu8cffi20kop46nj.gif"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
