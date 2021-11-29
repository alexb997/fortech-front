import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "../components/AddCar";
import CarsList from "../components/CarsList";
import CarById from "../components/CarById";
import CarsByManufacturer from "../components/CarsByManufacturer";
import UpdateCar from "../components/UpdateCar";
import RemoveCar from "../components/RemoveCar";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarById />} />
        <Route path="/carsBy/:manufacturer" element={<CarsByManufacturer />} />
        <Route path="/updateCar/:id" element={<UpdateCar />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/delete/:id" element={<RemoveCar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
