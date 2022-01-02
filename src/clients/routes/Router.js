import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "../components/cars/AddCar";
import CarsList from "../components/cars/CarsList";
import CarById from "../components/cars/CarById";
import CarsByManufacturer from "../components/cars/CarsByManufacturer";
import UpdateCar from "../components/cars/UpdateCar";
import RemoveCar from "../components/cars/RemoveCar";
import ClientsList from "../../admins/components/clients/ClientsList";
import AddClient from "../components/clients/AddClient";
import RemoveClient from "../components/clients/RemoveClient";
import UpdateClient from "../components/clients/UpdateClient";
import AssuranceCreator from "../../admins/components/assurances/AssuranceCreator";
import AssuranceList from "../../admins/components/assurances/AssuranceList";
import Home from "../components/home/Home.js";

function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurances" element={<AssuranceList />} />
        {/* <Route path="/assurance/:id" element={<AssurancePicker />} /> */}
        {/* <Route path="/update-assurance-plan/:id" element={<AssuranceUpdater />} /> */}
        <Route
          path="/add-insurance-plan"
          element={<AssuranceCreator />}
        />
        {/* <Route path="/remove-assurance-plan/:id" element={<AssuranceRemover />} /> */}
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/clients/add" element={<AddClient />} />
        <Route
          path="/clients/remove/:id"
          element={<RemoveClient />}
        />
        <Route
          path="/clients/update/:id"
          element={<UpdateClient />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
