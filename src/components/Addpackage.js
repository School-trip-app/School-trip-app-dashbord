import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios';
import '../styles/addPackage.css';


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
        ratePoints: e.target.rate.value
      }
      console.log(infoPacakge)
      await axios.post(`http://localhost:4005/package`, infoPacakge).then(res => {
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
                <label>City</label>
                <input type='text' id='city' data-testid='password-input' />
                <label>Location Name</label>
                <input type='text' id='locationName' />
                <label>Package Description</label>
                <input type='text' id='packageDiscription' />
                <label>Number Of People</label>
                <input type='number' id='numberOfPeople' />
                <label>Trip Date</label>
                <input type='text' id='tripDate' />
                <label>Meals</label>
                <input type='text' id='meals' />
              </div>
              <div className='form-2' style={{ marginLeft: '50px' }}>
                <label>Starting Time</label>
                <input type='text' id='startingTime' />
                <label>Ending Time</label>
                <input type='text' id='endingTime' />
                <label>Price</label>
                <input type='number' id='price' />
                <label>Pick-up Point</label>
                <input type='text' id='pickUpPoint' />
                <label>Drop Point</label>
                <input type='text' id='dropPoint' />
                <label>Rate</label>
                <input type='number' id='rate' />
                <button type='submit' className='submit-button-addpackage'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addpackage
