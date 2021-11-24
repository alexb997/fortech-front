import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddCar from '../components/AddCar';
import CarsList from '../components/CarsList';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Switch>
            <Route component={CarsList} path="/" exact={true} />
            <Route component={AddCar} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};