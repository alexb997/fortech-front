import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import logo from "./car-logo.png";

import "./navBar.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

class NavBar extends React.Component {
  state = {
    username: "",
  };
  handleChange = (e) => this.setState({ username: e.target.value });

  fakeLogin = (e) => {
    const { username } = this.state;
    e.preventDefault();
    if (!username) {
      return alert("Provide a username.");
    }
    this.props.doLogin(username);
    this.setState({ username: "" });
  };

  fakeLogout = () => this.props.doLogout();

  render() {
    return (
      <Col>
        <Row>
          <Navbar sticky="top" className="navbar" expand={false}>
            <Container fluid>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="90"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Nav className="me-auto nav-zone">
                <Nav.Link href="/cars">
                  <span className="link-blue">Cars</span>
                </Nav.Link>
                <Nav.Link href="/insurances">
                  <span className="link-blue">Assurances</span>
                </Nav.Link>
                <Nav.Link href="/finances">
                  <span className="link-blue">Finances</span>
                </Nav.Link>
                <Nav.Link href="/admin">
                  <span className="link-blue">Admin</span>
                </Nav.Link>
              </Nav>
              <div>
                <Nav.Link href="/profile/alex">
                  <Icon.HeartFill size={22} color="red" />
                  <Icon.PersonFill size={30} />
                </Nav.Link>
                {/* <Navbar.Toggle aria-controls="offcanvasNavbar" /> */}
              </div>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <div class="input-group">
            <input type="search" class="form-control" placeholder="search..." />
            <span class="input-group-addon input-group-addon-btn bg-white">
              <button class="btn px-2" type="submit">
                <Icon.Search />
              </button>
            </span>
          </div>
        </Row>
      </Col>
    );
  }

  // return (
  //   <Navbar expand={false}>
  //     <Container fluid>
  //       <Navbar.Brand href="/">
  //         <Icon.HouseFill size={37} />
  //       </Navbar.Brand>
  //       <div>
  //         <form onSubmit={this.fakeLogin}>
  //           <input
  //             value={this.state.username}
  //             style={{ width: "80px" }}
  //             onChange={this.handleChange}
  //           />
  //           &nbsp; | &nbsp;
  //           <Button variant="success">Login</Button> &nbsp;| &nbsp;
  //           <span>Not logged in</span>
  //         </form>
  //       </div>
  //       <div>
  //         <Navbar.Brand href="/profile">
  //           <Icon.PersonFill size={37} />
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="offcanvasNavbar" />
  //       </div>
  //       <Navbar.Offcanvas
  //         id="offcanvasNavbar"
  //         aria-labelledby="offcanvasNavbarLabel"
  //         placement="end"
  //       >
  //         <Offcanvas.Header closeButton>
  //           <Offcanvas.Title id="offcanvasNavbarLabel">
  //             Routing
  //           </Offcanvas.Title>
  //         </Offcanvas.Header>
  //         <Offcanvas.Body>
  //           <Nav className="justify-content-end flex-grow-1 pe-3">
  //             <NavDropdown title="Clients" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="/clients">List</NavDropdown.Item>
  //               <NavDropdown.Item href="/clients/add">Add</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //             </NavDropdown>
  //           </Nav>
  //           <Nav className="justify-content-end flex-grow-1 pe-3">
  //             <NavDropdown title="Cars" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="/cars">List</NavDropdown.Item>
  //               <NavDropdown.Item href="/addCar">Add</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //             </NavDropdown>
  //           </Nav>
  //           <Nav className="justify-content-end flex-grow-1 pe-3">
  //             <NavDropdown title="Insurance Plans" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="/insurances">List</NavDropdown.Item>
  //               <NavDropdown.Item href="/add-insurance-plan">
  //                 Add
  //               </NavDropdown.Item>
  //               <NavDropdown.Divider />
  //             </NavDropdown>
  //           </Nav>
  //         </Offcanvas.Body>
  //       </Navbar.Offcanvas>
  //     </Container>
  //   </Navbar>
  // );
  // }
}

export default NavBar;
