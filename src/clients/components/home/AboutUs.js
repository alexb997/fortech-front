import { Container, Row, Col, Button } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="about-us">
      <Row>
        <Col md={{ span: 3, offset: 1 }} className="small-container">
          <Row>
            <h1>Love Your Car Guarantee</h1>
          </Row>
          <Row>
            <span>
              24-hr test drives
              <svg
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="#053361"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.5 3A6 6 0 0012 5a6 6 0 00-4.5-2A5.5 5.5 0 002 8.5c0 3.8 3.4 6.9 8.6 11.5l1.4 1.4 1.4-1.4c5.2-4.6 8.6-7.7 8.6-11.5A5.5 5.5 0 0016.5 3zm.1 2A3.3 3.3 0 0120 8.4c0 2.8-3.2 5.8-8 10.2-4.8-4.4-8-7.4-8-10.2A3.3 3.3 0 017.4 5a3.9 3.9 0 012.9 1.4l1.7 2 1.7-2a3.9 3.9 0 013-1.4"></path>
              </svg>
            </span>
            <span class="hero-featured-content--subheading-icon__desktop">
              <svg
                width="53.91"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 53.91 40"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M7.41,8.42A27.13,27.13,0,0,0,2.81,15l2.3,1.14a24.9,24.9,0,0,1,4.17-6Z"
                  transform="translate(0 0)"
                  fill="#ffc000"
                ></path>
                <path
                  d="M17.19,4.61l-1-2.35a26.69,26.69,0,0,0-6.8,4.3l1.67,1.93A24.55,24.55,0,0,1,17.19,4.61Z"
                  transform="translate(0 0)"
                  fill="#ffc000"
                ></path>
                <path
                  d="M23,2.9a22.43,22.43,0,0,1,3.66-.33V0a27.18,27.18,0,0,0-7.95,1.31l.79,2.44A23.19,23.19,0,0,1,23,2.9Z"
                  transform="translate(0 0)"
                  fill="#ffc000"
                ></path>
                <path
                  d="M46.05,7.92a27.35,27.35,0,0,0-6.47-4.79L38.38,5.4A24.41,24.41,0,0,1,44,9.54L46,8Z"
                  transform="translate(0 0)"
                  fill="#ffc000"
                ></path>
                <path
                  d="M29.1,2.65a24.63,24.63,0,0,1,7.07,1.72l1-2.37A26.91,26.91,0,0,0,29.32.1Z"
                  transform="translate(0 0)"
                  fill="#ffc000"
                ></path>
                <path
                  d="M51,39.06a27,27,0,0,0-.37-25l-2,1.62A23.88,23.88,0,0,1,51,23a24.17,24.17,0,0,1-2.28,15Z"
                  transform="translate(0 0)"
                  fill="#053361"
                ></path>
                <path
                  d="M49.36,11.86l-1.59-2L37.33,18.1a7.46,7.46,0,0,0-5.23-2.19,7.14,7.14,0,0,0-5.23,2.64,7.12,7.12,0,0,0-5.23-2.64,7.39,7.39,0,0,0-7.37,7.39c0,3.74,2,7.61,5.93,11.5a39.4,39.4,0,0,0,6,4.77l.68.43.69-.43a39.4,39.4,0,0,0,6-4.77c3.94-3.89,5.94-7.76,5.94-11.5V23a7.22,7.22,0,0,0-.67-2.74ZM36.91,23.3c0,3-1.74,6.28-5.17,9.67a36,36,0,0,1-4.87,4A37.3,37.3,0,0,1,22,33c-3.42-3.39-5.16-6.64-5.16-9.67a4.81,4.81,0,0,1,4.8-4.82h0c1.78,0,3,1.37,4,2.58l1.19,1.35L28,21.09c1.06-1.21,2.26-2.58,4-2.58a4.82,4.82,0,0,1,4.92,4.72h0Z"
                  transform="translate(0 0)"
                  fill="#053361"
                ></path>
                <path
                  d="M4.17,18.33l-2.4-.91a27.66,27.66,0,0,0-1,3.08,27.09,27.09,0,0,0,2.1,18.56l2.29-1.15a24.41,24.41,0,0,1-2-16.14,2.88,2.88,0,0,1,.13-.65A22.58,22.58,0,0,1,4.17,18.33Z"
                  transform="translate(0 0)"
                  fill="#053361"
                ></path>
              </svg>
            </span>
          </Row>
          <Row className="justify-content-md-center">30-day returns</Row>
          <Row className="justify-content-md-center ">
            <Col>
              <Button type="info">Find Your Car</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
