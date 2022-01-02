import { useEffect, useState, useHistory } from "react";

function AssuranceList() {
  const [isLoading, setIsLoading] = useState(true);
  const [assurancePlansList, setAssurancePlansList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/assurance/plans")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setAssurancePlansList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeAll = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/assurance/assurances/", requestOptions).then(
      (response) => {
        setAssurancePlansList([]);
        console.log(response);
      }
    );
  };

  const confirmRemoval = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/assurance/plans/" + id, requestOptions).then(
      (response) => {
        let updatedPlansList = assurancePlansList.filter((i) => i.id !== id);
        setAssurancePlansList(updatedPlansList);
        console.log(response);
      }
    );
  };

  //   const routeChange = (id) => {
  //     let path = `/`;
  //     let history = useHistory();
  //     history.push(path);
  //   };

  return (
    <div>
      <button onClick={() => removeAll()}>Delete All</button>
      {isLoading && <p>Loading...</p>}
      {assurancePlansList.map((c, index) => (
        <div className="insurance-container">
          <h4 className="title">{c.title}</h4>
          <p className="insurance-details">
            <span className="description">{c.description}</span>
            <span className="period">
              Subscription available for {c.defaultPeriod} days
            </span>
          </p>
          <span className="insurance-actions">
            <button>Edit</button>
            <button onClick={() => confirmRemoval(c.id)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default AssuranceList;
