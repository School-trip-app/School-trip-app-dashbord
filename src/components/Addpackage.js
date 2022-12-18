import React, { useState } from 'react'
import Nav from './Nav'
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import axios from 'axios';


function Addpackage() {
  const [packages, setPackages] = useState([]);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const infoPacakge = {
        packageName: e.target.packageName.value,
        city: e.target.city.value,
        locationName: e.target.locationName.value,
        packageDiscription: e.target.packageDiscription.value,
        tripDate: e.target.tripDate.value,
        numberOfPeople: e.target.numberOfPeople.value,
        startingTime: e.target.startingTime.value,
        endingTime: e.target.endingTime.value,
        price: e.target.price.value,
        meals: e.target.meals.value,
        pickUpPoint: e.target.pickUpPoint.value,
        dropPoint: e.target.dropPoint.value,
        rate: e.target.rate.value,
        ratePoints:e.target.rate.value
      }
      console.log(infoPacakge)
      await axios.post(`http://localhost:4001/package`, infoPacakge).then(res => {
        setPackages(res.data);
        console.log(packages);
      }).catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <div className='main'>
        <div className='form-package' >
          <h1 style={{ textAlign: 'center' }}>Add New Package</h1>
          <div className='form-signup' style={{ paddingTop: '0px', position: 'relative', top: '-150px' }} >
            <form className='signup-form' style={{ display: 'flex', width: '70%' }} onSubmit={handlerSubmit}>
              <div className='form-1'>
                <label>Package Name</label>
                <input type='text' id='packageName' data-testid='Name-input' />
                <label>city</label>
                <input type='text' id='city' data-testid='password-input' />
                <label>locationName</label>
                <input type='text' id='locationName' />
                <label>packageDiscription</label>
                <input type='text' id='packageDiscription' />
                <label>numberOfPeople</label>
                <input type='number' id='numberOfPeople' />
                <label>tripDate</label>
                <input type='text' id='tripDate' />
                <label>meals</label>
                <input type='text' id='meals' />
              </div>
              <div className='form-2' style={{ marginLeft: '50px' }}>
              <label>startingTime</label>
                <input type='text' id='startingTime' />
                <label>endingTime</label>
                <input type='text' id='endingTime' />
                <label>price</label>
                <input type='number' id='price' />
                <label>pickUpPoint</label>
                <input type='text' id='pickUpPoint' />
                <label>dropPoint</label>
                <input type='text' id='dropPoint' />
                <label>rate</label>
                <input type='number' id='rate' />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addpackage
