import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssuranceContainer from "./AssuranceContainer";

function AssuranceRemover() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [assurance, setAssurance] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/assurance/plans/" + id)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setAssurance(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const confirmRemoval = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "http://localhost:8080/assurance/plans/" + id,
      requestOptions
    ).then((response) => {
        
      console.log(response);
    });
  };

  return (
    <div>
      <h3>Are you sure? </h3>
      {isLoading && <p>Loading...</p>}
      <AssuranceContainer assurance={assurance} />
      <input type="button" onClick={confirmRemoval} value="YES" />
    </div>
  );
}

export default AssuranceRemover;
