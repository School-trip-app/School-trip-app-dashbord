import React from 'react'
import '../styles/Main.css';
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import trip from '../images/tr.png';
import Users from './Users';
function Main() {
  return (
    <div className='main'>
      <div className='calender'>
        <input type='text' placeholder='Search' style={{width:'300px'}}/>
        <select>
            <option>20 012020- 24-02.2020</option>
        </select>
        <ul>
         <li>
            <SearchIcon/>
         </li>
         <li>
            <ManIcon/>
         </li>
         <li>
          <FlightIcon/>
         </li>
         <li>
         <BedroomChildIcon/>
         </li>
         <li>
            <BatteryChargingFullIcon/>
         </li>
        </ul>
      </div>
      <div className='welcome'>
        <div className='text'>
        <h1>Welcome to JOurney Travels</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, temporibus repudiandae et eligendi voluptates vel libero delectus amet veritatis laboriosam.</p>
        </div>
        <img src={trip} alt='img'/>
      </div>
      <div className='statistical'>
           <div className='statistical-box'>
               <h1>25K <span>3.3%</span></h1>
               <p>Packages travel</p>
           </div>
           <div className='statistical-box'>
               <h1>220 <span>7.8%</span></h1>
               <p>Completed travel</p>
           </div>
           <div className='statistical-box'>
               <h1>100 <span>7.3%</span></h1>
               <p>Active User</p>
           </div>
           <div className='statistical-box'>
               <h1>20 <span>10.3%</span></h1>
               <p>photographers</p>
           </div>
      </div>
       <Users/>
    </div>
  )
}

export default Main
