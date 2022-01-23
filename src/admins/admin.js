import { Container } from "react-bootstrap";
import NavBar from "../navigation/navBar";

const Admin = () => {
  return (
    <Container>
      <NavBar />
      <h3>Admin zone</h3>
      Redirect to:
      <li>
        <a href="/clients/add">Add client</a>
      </li>
      <li>
        <a href="/clients">List Clients</a>
      </li>
      <li>
        <a href="/cars/add">Add Car</a>
      </li>
      <li>
        <a href="/cars">List cars</a>
      </li>
    </Container>
  );
};

export default Admin;
