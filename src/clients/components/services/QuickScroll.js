import { Col, Container, Row, Button } from "react-bootstrap";
import quick from "./quick.jpg";

function QuickScroll() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2>Schedule with RepairPal, a trusted CarTalk partner</h2>
          <p>It's quick and convenient, and you can schedule online!</p>
          <Button type="info">Find a shop near you</Button>
        </Col>
        <Col>
          <img src={quick} />
        </Col>
      </Row>
    </Container>
  );
}

export default QuickScroll;
