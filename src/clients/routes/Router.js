import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "../components/cars/AddCar";
import CarsList from "../components/cars/CarsList";
import CarById from "../components/cars/CarById";
import CarsByManufacturer from "../components/cars/CarsByManufacturer";
import UpdateCar from "../components/cars/UpdateCar";
import RemoveCar from "../components/cars/RemoveCar";
import ClientsList from "../components/clients/ClientsList";
import AddClient from "../components/clients/AddClient";
import RemoveClient from "../components/clients/RemoveClient";
import UpdateClient from "../components/clients/UpdateClient";
import AssuranceCreator from "../components/assurances/AssuranceCreator";
import AssuranceList from "../components/assurances/AssuranceList";
import Home from "../components/home/Home.js";

const AppRouter = (auth) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurances" element={<AssuranceList auth={auth} />} />
        {/* <Route path="/assurance/:id" element={<AssurancePicker />} /> */}
        {/* <Route path="/update-assurance-plan/:id" element={<AssuranceUpdater />} /> */}
        <Route
          path="/add-insurance-plan"
          element={<AssuranceCreator auth={auth} />}
        />
        {/* <Route path="/remove-assurance-plan/:id" element={<AssuranceRemover />} /> */}
        <Route path="/clients" element={<ClientsList auth={auth} />} />
        <Route path="/clients/add" element={<AddClient auth={auth} />} />
        <Route
          path="/clients/remove/:id"
          element={<RemoveClient auth={auth} />}
        />
        <Route
          path="/clients/update/:id"
          element={<UpdateClient auth={auth} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
