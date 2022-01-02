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
    const { auth } = this.props;
    if (auth.isLoggedIn) {
      return (
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">
              <Icon.HouseFill size={37} />
            </Navbar.Brand>
            <div>
              <span>
                Welcome <strong>{auth.username}</strong> |{" "}
              </span>
              &nbsp;
              <button onClick={this.fakeLogout}>Logout</button>
            </div>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Routing
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Clients" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/clients">List</NavDropdown.Item>
                    <NavDropdown.Item href="/clients/add">Add</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Insurance Plans" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/insurances">List</NavDropdown.Item>
                    <NavDropdown.Item href="/add-insurance-plan">
                      Add
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
    }

    return (
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Icon.HouseFill size={37} />
          </Navbar.Brand>
          <div>
            <form onSubmit={this.fakeLogin}>
              <input
                value={this.state.username}
                style={{ width: "80px" }}
                onChange={this.handleChange}
              />
              &nbsp; | &nbsp;
              <button>Login</button> &nbsp;| &nbsp;
              <span>Not logged in</span>
            </form>
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Routing
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="Clients" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/clients">List</NavDropdown.Item>
                  <NavDropdown.Item href="/clients/add">Add</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="Insurance Plans" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/insurances">List</NavDropdown.Item>
                  <NavDropdown.Item href="/add-insurance-plan">
                    Add
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;