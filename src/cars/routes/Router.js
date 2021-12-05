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

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarById />} />
        <Route path="/carsBy/:manufacturer" element={<CarsByManufacturer />} />
        <Route path="/updateCar/:id" element={<UpdateCar />} />
        <Route path="/add" element={<AddCar />} /> */}
        <Route path="/delete/:id" element={<RemoveCar />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/clients/add" element={<AddClient />} />
        <Route path="/clients/remove/:id" element={<RemoveClient />} />
        <Route path="/clients/update/:id" element={<UpdateClient />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
