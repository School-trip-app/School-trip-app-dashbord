import React, { useEffect } from 'react'
import Nav from './Nav'
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import '../styles/photographers.css';
import { useDispatch } from "react-redux";
import { addphotographerAsync, getphotographerAsync } from "../store/Photographers-re";


function Photographers() {
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();

    dispatch(addphotographerAsync({
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
      phoneNumber: e.target.phoneNumber.value,
      rate: e.target.rate.value,
      email: e.target.email.value
    }
    ));
    e.target.reset();

  };

  useEffect(() => {
    dispatch(getphotographerAsync());
  }, [dispatch]);


  return (
    <div className='photographers'>
      <Nav />
      <div className='main'>
        <div>
          <h1>Add Photographers</h1>
          <form className='formpho' onSubmit={(e) => { add(e) }}>
            <div className='col-1'>
              <input className='inputpho' type="text" name="name" placeholder='Name of Photographer :' />
              <input className='inputpho' type="number" name="phoneNumber" placeholder='PhoneNumber of Photographer :' />
              <input className='inputpho' type="text" name="email" placeholder='Email of Photographer :' />
            </div>
            <div className='col-2'>
              <input className='inputpho' type="number" name="price" placeholder='price :' />
              <input className='inputpho' type="text" name="image" placeholder='image link of Photographer :' />
              <input className='inputpho' type="number" name="rate" placeholder='rate of Photographer :' />
              <input className='submitpho' type="submit" value="Submit" />
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photographers
