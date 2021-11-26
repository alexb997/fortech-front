import React, { useEffect } from 'react';
import CarContainer from './CarContainer';

function CarsList(){
  const isLoading =true;
  let carsList = [];
  useEffect(() => {
    fetch('http://localhost:8080/api/cars',
    {
        method: "get",
        dataType: 'json',
        headers: new Headers({
          "Access-Control-Allow-Origin": "http://localhost:3000/cars",
          "Access-Control-Allow-Methods" : "GET"
        })
    })
    .then((res) => res.json())
    .then((data) => {
      for(var i=0; i< data.length; i++){
        var car = data[i];
        carsList.push(car);
      }
      isLoading=false;
    })
    .catch(err => console.log(err))
  }, [])

  return(
      <div>
        <h3>Api call to backend</h3>
        {isLoading && <p>Loading...</p>}
        {carsList.map((c,index) => (
          <div key={index}>
            {c.car && (
              <>
                <div>
                <h4>"Car Plate"</h4>
                  <p className="space-around">
                      <span >"Car Manufacturer"</span>
                      <span >"Car Assured"</span>
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
}


export default CarsList;
