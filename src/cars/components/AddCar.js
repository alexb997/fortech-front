import React from 'react';
import CarForm from './BookForm';

const AddCar = () => {
  const handleOnSubmit = (car) => {
    console.log(car);
  };

  return (
    <React.Fragment>
      <CarForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCar;
