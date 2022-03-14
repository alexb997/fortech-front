import { Col, Container, Row, Button } from "react-bootstrap";
import A from "./A.jpg";

function VisitForRepairs() {
  return (
    <Row className="justify-content-center">
      <Col className="recommended " sm={{ span: 5 }}>
        {/* <h2>Schedule with RepairPal, a trusted CarTalk partner</h2>
        <p>It's quick and convenient, and you can schedule online!</p>
        <Button type="info">Find a shop near you</Button> */}
        <img src={A} />
      </Col>
      <Col className="recommended" sm={{ span: 5, offset: 1 }}>
        <h2>Schedule with RepairPal, a trusted CarTalk partner</h2>
        <p>It's quick and convenient, and you can schedule online!</p>
        <Button type="info">Find a shop near you</Button>
      </Col>
    </Row>
  );
}

export default VisitForRepairs;
