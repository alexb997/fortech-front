import {
  Col,
  Container,
  Row,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Accordion,
  Carousel,
} from "react-bootstrap";
import { useState } from "react";
import NavBar from "../../../navigation/navBar";
import "./Finances.css";
import image from "./info-img.png";

function Finances() {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);

  return (
    <div className="finances">
      <NavBar />
      <div className="blue">
        <Container>
          <ToggleButtonGroup
            type="checkbox"
            size="lg"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton id="tbg-btn-1" value={1}>
              Option 1
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
              Option 2
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
              Option 3
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="blue-text">Financing at CarTalk</h1>
          </Col>
        </Row>
      </Container>
      <div className="picture-zone">
        <span className="relative-position">
          <Col>
            <Row className="picture-title">
              <b>
                <span>The way financing should be</span>
              </b>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="primary" className="picture-button">
                Button
              </Button>
            </Row>
          </Col>
        </span>
      </div>
      <div className="empty"></div>
      <div>
        <Container>
          <Row className="align-items-center">
            <Col>
              <b>
                <p className="text-subtitle blue-text">
                  One stop, multiple financing sources
                </p>
              </b>
              <p>
                Our finance sources accommodate a wide range of customers,
                including first-time buyers.
              </p>
            </Col>
            <Col>
              <img src="https://www.carmax.com/pre-qual/images/rtb1-chase-added.webp"></img>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <img src="https://www.carmax.com/pre-qual/images/rtb2.webp"></img>
            </Col>
            <Col className="text-zone">
              <b>
                <p className="text-subtitle blue-text">
                  Financing as simple as our car prices
                </p>
              </b>
              <p>
                Get pre-approved to get an idea of what you can spend on a used
                car. If you find other financing after you buy, use our 3-day
                payoff program.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="text-zone">
              <b>
                <p className="text-subtitle blue-text">
                  No surprises, no regrets
                </p>
              </b>
              <p>
                Our finance sources accommodate a wide range of customers,
                including first-time buyers.
              </p>
            </Col>
            <Col>
              <img src="https://www.carmax.com/pre-qual/images/rtb3.webp"></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="empty"></div>
      <Container>
        <img src={image} />
      </Container>
      <div className="empty"></div>
      <Container className="blue" fluid>
        <Carousel className="carousel-blue">
          <Carousel.Item>
            <h3>
              <em>
                “Very helpful, even when I had to take some time to work out the
                financing with our credit&nbsp;union.”
              </em>
            </h3>
            <p>
              Mark B.
              <br />
              Clinton, MS
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <em>
                “CarTalk showed and explained all financing options without
                pressuring us one way&nbsp;or another.”
              </em>
            </h3>
            <p class="testimonial-author">
              Robert F.
              <br />
              Omaha, NE
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <em>
                “My consultant was very patient and helpful throughout the whole
                financing&nbsp;process.”
              </em>
            </h3>
            <p class="testimonial-author">
              Jamie F.
              <br />
              Milwaukee, WI
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <em>
                “My consultant was very patient and helpful throughout the whole
                financing&nbsp;process.”
              </em>
            </h3>
            <p class="testimonial-author">
              Jamie F.
              <br />
              Milwaukee, WI
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <em>
                “My consultant was very patient and helpful throughout the whole
                financing&nbsp;process.”
              </em>
            </h3>
            <p class="testimonial-author">
              Jamie F.
              <br />
              Milwaukee, WI
            </p>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="empty"></div>
      <Container>
        <h2 className="blue-text centered">Frequently asked questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="blue-text">
              Does CarTalk offer financing?
            </Accordion.Header>
            <Accordion.Body>
              Yes. We offer financing through several finance sources, including
              CarTalk Auto Finance, a division of CarMax. Most of our customers’
              financing decisions are available in 20 minutes or less.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="blue-text">
              Will applying impact my credit score?
            </Accordion.Header>
            <Accordion.Body>
              Yes. Our finance sources will use your credit reports to review
              your application. Credit reporting agencies understand customers
              shopping for vehicle financing typically comparison shop. For this
              reason, all auto finance-related inquiries within 14-45 days are
              generally considered as one inquiry. This also applies to
              customers reapplying or submitting more than one application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="blue-text">
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="blue-text">
              This is my first car purchase. Can i finance with CarTalk?
            </Accordion.Header>
            <Accordion.Body>
              Our finance sources accommodate most credit profiles, and every
              CarMax customer can expect the same no-haggle pricing and
              exceptional customer service.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="blue-text">
              I don't have the best credit rating. Can i finance with CarTalk?
            </Accordion.Header>
            <Accordion.Body>
              Our finance sources accommodate most credit profiles, and every
              CarMax customer can expect the same no-haggle pricing and
              exceptional customer service.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="blue-text">
              Can i use co-buyer?
            </Accordion.Header>
            <Accordion.Body>
              Yes. You can add a co-buyer to your pre-approval application or
              finance application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="blue-text">
              I am financing somewhere else than CarTalk. What do i need to
              provide CarTalk?
            </Accordion.Header>
            <Accordion.Body>
              If you already have financing through your bank or an outside
              lender, you will need to provide a voucher, check or other proof
              of financing. We’ll help you with that process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="blue-text">
              If i find better financing after i buy the car, can i replace my
              financing with another provider?
            </Accordion.Header>
            <Accordion.Body>
              Absolutely. We offer a Three-Day Payoff Program that lets you
              replace your financing with another provider at no cost.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <div className="empty"></div>
    </div>
  );
}
export default Finances;
