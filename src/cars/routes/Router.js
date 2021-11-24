import React from 'react';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import AddCar from '../components/AddCar';
import CarsList from '../components/CarsList';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/cars" element={<CarsList/>}  />
            <Route path="/add" element={<AddCar/>}  />
        </Routes>
    </Router>
  );
};

export default AppRouter;
