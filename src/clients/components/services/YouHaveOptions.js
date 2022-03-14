import { Col, Container, Row, Button } from "react-bootstrap";

import B from "./B.jpg";

function YouHaveOptions() {
  return (
    <Row className="justify-content-center">
      <Col className="recommended " sm={{ span: 5 }}>
        {/* <h2>Schedule at a CarTalk Service Center®</h2>
        <p>Your Nearest Store Kansas City</p>
        <p>6801 East Frontage Road</p>
        <p> Merriam, KS 66204</p> */}
        <img src={B} />
      </Col>
      <Col className="recommended" sm={{ span: 5, offset: 1 }}>
        <h2>Schedule at a CarTalk Service Center®</h2>
        <p>Your Nearest Store Kansas City</p>
        <p>6801 East Frontage Road</p>
        <p> Merriam, KS 66204</p>
      </Col>
    </Row>
  );
}

export default YouHaveOptions;
