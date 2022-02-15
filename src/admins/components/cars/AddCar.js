import { useEffect, useState } from "react";
import CarContainer from "../../../clients/components/cars/CarContainer";
import NavBar from "../../../navigation/navBar";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";

// Cars database manipulated just by admin, client will have to select car from
//list of cars given by site, if not on list can't assure it here or smth...

const AddCar = () => {
  const [car, setCar] = useState({});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [kind, setKind] = useState("");

  useEffect(() => {
    setCar({
      name: name,
      brand: brand,
      kind: kind,
    });
  }, []);

  function handleUpload(e) {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", "docs_upload_example_us_preset");

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.getElementById("data").innerHTML += data;
      });
  }
});



  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpload(e);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        brand: brand,
        kind: kind,
      }),
    };
    fetch("http://localhost:8080/cars/cars/", requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
  };

  return (
    <div>
      <NavBar />
      <h3>Input form</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder={car.name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            placeholder={car.brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="kind"
            placeholder={car.kind}
            onChange={(e) => setKind(e.target.value)}
          />
        </label>
        <input type="file" name="files[]" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
