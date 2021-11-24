import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CarForm = (props) => {
  const [car, setCar] = useState({
    manufacturer: props.car ? props.car.manufacturer: '',
    plate: props.car ? props.car.plate: '',
    assured: props.car ? props.car.assured: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { manufacturer,plate,assured } = car;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [manufacturer,plate,assured];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const car = {
        id: uuidv4(),
        manufacturer,
        plate,
        assured
      };
      props.handleOnSubmit(car);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };
};

export default CarForm;
