import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import '../styles/order.css';
import axios from 'axios';
function Orders() {
  let [orders, setOrders] = useState([]);
  const handlerOrder = async () => {
    await axios.get('http://localhost:4005/user').then((res) => {
      setOrders(res.data);
    }).catch(err => console.log(err));

  }
  useEffect(() => {
    handlerOrder();
  }, []);

  return (
    <div className='order'>
      <Nav />
      <div className='main'>
        <h1>Special Orders Requests </h1>
        <div className='users'>
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
                    {user.tripRequests.map((data) => {
                      return (
                        <li>{data.place}</li>
                      )
                    })}
                  </td>
                  <td>
                    {user.tripRequests.map((data) => {
                      return (
                        <li>{data.date}</li>
                      )
                    })}
                  </td>
                  <td>
                    {user.tripRequests.map((data) => {
                      return (
                        <li>{data.numberOfStudents}</li>
                      )
                    })}
                  </td>
                  <td>
                    {user.tripRequests.map((data) => {
                      return (
                        <li>{data.contactMethod}</li>
                      )
                    })}
                  </td>
                  <td>
                    {user.tripRequests.map((data) => {
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