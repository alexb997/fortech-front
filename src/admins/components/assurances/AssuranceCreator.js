import { useEffect, useState } from "react";
import "./AssuranceComponents.css";

const AssuranceCreator = () => {
  const [assurance, setAssurance] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [defaultPeriod, setDefaultPeriod] = useState(7);

  useEffect(() => {
    setAssurance({
      title: title,
      description: description,
      defaultPeriod: defaultPeriod,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        defaultPeriod: defaultPeriod,
      }),
    };
    fetch("http://localhost:8080/assurance/plans", requestOptions)
      .then((response) => response.json())
      .then((data) => setAssurance(data));
  };
  const titleChange = (e) => {
    setTitle(e);
    setAssurance({
      title: title,
      description: description,
      defaultPeriod: defaultPeriod,
    });
  };
  const descriptionChange = (e) => {
    setDescription(e);
    setAssurance({
      title: title,
      description: description,
      defaultPeriod: defaultPeriod,
    });
  };
  const defaultPeriodChange = (e) => {
    setDefaultPeriod(e);
    setAssurance({
      title: title,
      description: description,
      defaultPeriod: defaultPeriod,
    });
  };

  return (
    <div>
      <h3>Input Assurance</h3>
      <form
        className="creator-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder={assurance.title}
            onKeyUp={(e) => titleChange(e.target.value)}
            onKeyDown={(e) => titleChange(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder={assurance.description}
            onKeyUp={(e) => descriptionChange(e.target.value)}
            onKeyDown={(e) => descriptionChange(e.target.value)}
          />
        </label>
        <label>
          Default period(days) -try period when can:
          <input
            type="number"
            name="defaultPeriod"
            min="7"
            max="365"
            placeholder={assurance.defaultPeriod}
            onKeyUp={(e) => defaultPeriodChange(e.target.value)}
            onKeyDown={(e) => defaultPeriodChange(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AssuranceCreator;
