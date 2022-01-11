import { useEffect, useState, useHistory } from "react";
import Alert from "react-bootstrap/Alert";
import * as Icon from "react-bootstrap-icons";

import CarContainer from "./CarContainer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Button, Row } from "react-bootstrap";

import "./Cars.css";

function CarsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [carsList, setCarsList] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [show, setShow] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [by, setBy] = useState("");

  useEffect(async () => {
    await fetch(
      "http://localhost:8080/cars/cars?page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage +
        (keyword === "" ? "" : "&keyword=" + keyword) +
        (by === "" ? "" : "&by=" + by)
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCarsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
        setIsUpdating(false);
      })
      .catch((err) => console.log(err));
  }, [isUpdating]);

  function setVisibility(zone) {}

  const confirmRemoval = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/cars/cars/" + id, requestOptions).then(
      (response) => {
        let updatedCars = carsList.filter((i) => i.id !== id);
        setCarsList(updatedCars);
        console.log(response);
      }
    );
  };

  const prevPage = () => {
    if (currentPage - 1 < 1) {
      setShow(true);
    } else {
      setCurrentPage(currentPage - 1);
      setIsUpdating(true);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 > totalPages) {
      setShow(true);
    } else {
      setCurrentPage(currentPage + 1);
      setIsUpdating(true);
    }
  };

  const handleFilter = (keyword) => {
    setBy("");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "http://localhost:8080/cars/cars?page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage +
        "&keyword=" +
        keyword,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCarsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
      });
  };

  const handleFilterBy = (keyword, setter) => {
    setBy(setter);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "http://localhost:8080/cars/cars?page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage +
        "&keyword=" +
        keyword +
        "&by=" +
        by,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCarsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
      });
  };

  return (
    <div>
      <Alert show={show} variant="success">
        <Alert.Heading>YOU SHALL NOT PASS!! </Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Got it
          </Button>
        </div>
      </Alert>
      <input
        type="text"
        id="header-search"
        placeholder="Search cars"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={() => handleFilter(keyword)}>Search</Button>
      <p>
        Total Pages = {totalPages} with a total elements of {totalElements}
      </p>
      {/* <Button>Delete All</Button> */}
      {isLoading && <p>Loading...</p>}
      <Container fluid={true}>
        <Row>
          <Col sm={2} className="background-gray">
            <h2>Search by:</h2>
            <Row>
              <Button onClick={() => setBy("type")}>
                Type <Icon.ChevronRight />
              </Button>
              <Alert show={by === "type"}>
                <input
                  type="text"
                  id="type-search"
                  placeholder="Search cars"
                  name="keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button onClick={() => handleFilterBy(keyword, "type")}>
                  Search
                </Button>
              </Alert>
              <hr />
            </Row>
            <Row>
              <Button onClick={() => setBy("name")}>
                Name <Icon.ChevronRight />
              </Button>
              <Alert show={by === "name"}>
                <input
                  type="text"
                  id="title-search"
                  placeholder="Search cars"
                  name="keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button onClick={() => handleFilterBy(keyword, "name")}>
                  Search
                </Button>
              </Alert>
              <hr />
            </Row>
            <Row>
              <Button onClick={() => setBy("brand")}>
                Brand <Icon.ChevronRight />
              </Button>
              <Alert show={by === "brand"}>
                <input
                  type="text"
                  id="brand-search"
                  placeholder="Search cars"
                  name="keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button onClick={() => handleFilterBy(keyword, "brand")}>
                  Search
                </Button>
              </Alert>
              <hr />
            </Row>
          </Col>
          <Col sm={10}>
            <Row>
              {carsList.length != 0 ? (
                carsList.map((c, index) => (
                  <Col md={3} key={index} className="car-item">
                    <CarContainer car={c} />
                    <span className="car-actions">
                      <Button
                        onClick={() => confirmRemoval(c.id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </span>
                  </Col>
                ))
              ) : (
                <h3>No cars documented</h3>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <span>
        <Button onClick={() => prevPage()}>Prev..</Button>
        <span>{currentPage}</span>
        <Button onClick={() => nextPage()}>Next..</Button>
        <br />
        Out of {totalPages} pages
        <br />A total of {totalElements} cars
      </span>
    </div>
  );
}

export default CarsList;
