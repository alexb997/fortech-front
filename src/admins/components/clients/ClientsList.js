import { useEffect, useState, useHistory } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Button, Row } from "react-bootstrap";
import NavBar from "../../../navigation/navBar";

import "./Clients.css";
import ClientContainer from "./ClientContainer";

function ClientsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState([]);
  const [clientsPerPage, setClientsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [show, setShow] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(async () => {
    await fetch(
      "http://localhost:8080/clients/clients?page=" +
        (currentPage - 1) +
        "&size=" +
        clientsPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setClientsList(data.items);
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
    fetch("http://localhost:8080/clients/clients/" + id, requestOptions).then(
      (response) => {
        let updatedClients = clientsList;
        setClientsList(updatedClients);
        console.log(response);
      }
    );
  };

  const handleFilter = (keyword) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "http://localhost:8080/clients/clients?page=" +
        (currentPage - 1) +
        "&size=" +
        clientsPerPage +
        "&keyword=" +
        keyword,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setClientsList(data.items);
        setTotalPages(data.totalPages ? data.totalPages : 0);
        setTotalElements(data.totalItems ? data.totalItems : 0);
      });
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
    setClientsPerPage(value);
    setIsUpdating(true);
  };

  return (
    <div className="list-page">
      <NavBar />
      <Alert show={show} variant="success">
        <Alert.Heading>YOU SHALL NOT PASS!! </Alert.Heading>
        <p>
          probably should just disable button in this case but wanna see a alarm
          working.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <button onClick={() => setShow(false)} variant="outline-success">
            Got it
          </button>
        </div>
      </Alert>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search clients by keyword</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search clients"
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
        <Row>
          {clientsList.length != 0 ? (
            clientsList.map((c, index) => (
              <Col xs={6} md={4} key={index} className="client-item">
                <ClientContainer client={c} />
                <span classname="actions">
                  <Button variant="info">Cars List</Button>
                  {/* <button></button> */}
                  <Button onClick={() => confirmRemoval(c.id)} variant="danger">
                    Delete
                  </Button>
                </span>
              </Col>
            ))
          ) : (
            <h3>No clients documented</h3>
          )}
        </Row>
      </Container>
      <span>
        <button onClick={() => prevPage()}>Prev..</button>
        <span>{currentPage}</span>
        <button onClick={() => nextPage()}>Next..</button>
        <br />
        Out of {totalPages} pages
        <br />
        Clients per page:
        <select
          value={clientsPerPage}
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

export default ClientsList;
