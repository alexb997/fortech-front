import { useEffect, useState, useHistory } from "react";
import Alert from "react-bootstrap/Alert";
import CarContainer from "./CarContainer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

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

  useEffect(async () => {
    await fetch(
      "http://localhost:8080/cars/cars?page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage
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

  const handleChange = (value) => {
    setCurrentPage(1);
    setCarsPerPage(value);
    setIsUpdating(true);
  };

  const handleFilter = (keyword) => {
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

  return (
    <div>
      <Alert show={show} variant="success">
        <Alert.Heading>YOU SHALL NOT PASS!! </Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <button onClick={() => setShow(false)} variant="outline-success">
            Got it
          </button>
        </div>
      </Alert>
      <input
        type="text"
        id="header-search"
        placeholder="Search cars"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={() => handleFilter(keyword)}>Search</button>
      <p>
        Total Pages = {totalPages} with a total elements of {totalElements}
      </p>
      {/* <button>Delete All</button> */}
      {isLoading && <p>Loading...</p>}
      <Container>
        <div className="row justify-content-center">
          {carsList.length != 0 ? (
            carsList.map((c, index) => (
              <Col xs={6} md={4} key={index}>
                <CarContainer car={c} />
                <span className="car-actions">
                  <button onClick={() => confirmRemoval(c.id)}>Delete</button>
                </span>
                <hr />
              </Col>
            ))
          ) : (
            <h3>No cars documented</h3>
          )}
        </div>
      </Container>
      <span>
        <button onClick={() => prevPage()}>Prev..</button>
        <span>{currentPage}</span>
        <button onClick={() => nextPage()}>Next..</button>
        <br />
        Out of {totalPages} pages
        <br />
        Cars per page:
        <select
          value={carsPerPage}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        Out of {totalElements}
      </span>
    </div>
  );
}

export default CarsList;
