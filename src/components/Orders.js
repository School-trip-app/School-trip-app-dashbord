import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import '../styles/order.css';
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import axios from 'axios';
function Orders() {
  let [orders, setOrders]=useState([]);
const handlerOrder=async()=>{
   await axios.get('https://sophisticated-steel-production.up.railway.app/user').then((res)=>{
    setOrders(res.data);
    console.log(res.data);
    console.log(orders.tripRequests)
   }).catch(err=>console.log(err));
   
}
useEffect(()=>{
 handlerOrder();
},[]);

  return (
    <div className='order'>
      <Nav/>
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
      <div className='text-orders'>
        <h1>Special Orders</h1>
      </div>
      <div className='users'>
      <div className='text'>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting</p>
      </div>
      <table >
        <thead >
          <tr>
            <th>username</th>
            <th>name palce</th>
            <th>date</th>
            <th>number of students</th>
            <th>contact method</th>
            <th>other details</th>
          </tr>
        </thead>
        {orders && orders.map((user) => {
          return <tbody key={user.id}>
            <tr>
              <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5 style={{ marginLeft: '10px' }}>{user.username}</h5>
              </td>
              <td>
                {user.tripRequests.map((data)=>{
                  return (
                    <li>{data.place}</li>
                  )
                })}
              </td>
              <td>
                {user.tripRequests.map((data)=>{
                  return (
                    <li>{data.date}</li>
                  )
                })}
              </td>
              <td>
                {user.tripRequests.map((data)=>{
                  return (
                    <li>{data.numberOfStudents}</li>
                  )
                })}
              </td>
              <td>
                {user.tripRequests.map((data)=>{
                  return (
                    <li>{data.contactMethod}</li>
                  )
                })}
              </td>
              <td>
                {user.tripRequests.map((data)=>{
                  return (
                    <li>{data.otherDetails}</li>
                  )
                })}
              </td>
            </tr>
          </tbody>
        })}
      </table>
    </div>
    </div>
    </div>
  )
}

export default Orders;  


// {user.tripRequests.map((trip)=>{
//   return<>
//  <td>{trip.place}</td>
//  <td>{trip.date}</td>
//  <td>{trip.numberOfStudents}</td>
//  <td>{trip.contactMethod}</td>
//     </>

//  })}