import React from 'react'
import Info from './Info'
import axios from "axios";

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/carapp/cars");
    console.log(result.data);
}

async function getCarById(id) {
    let result = await axios.get("http://localhost:8080/carapp/cars/" + id);
    console.log(result.data);
}

async function getCarsByMake(make) {
    let result = await axios.get("http://localhost:8080/carapp/cars/make/" + make);
    console.log(result.data);
}

export const CarInfoSection = () => {
  return (
    <div>
        <Info />
        <button className="btn btn-primary" onClick={getAllCars}>test</button>
        <button className="btn btn-primary" onClick={(e) => getCarById(3)}>test</button>
        <button className="btn btn-primary" onClick={(e) => getCarsByMake("Nissan")}>test</button>
    </div>
  )
}
