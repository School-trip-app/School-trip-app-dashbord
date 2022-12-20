import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import '../styles/packagesOrders.css'

function PackagesOrders() {

  async function getAllPackageOrders() {
    const url = 'https://sophisticated-steel-production.up.railway.app/user';  //edit link
    const ordersData = await axios.get(url);
    const orders = ordersData.data;
    console.log(orders);
    return orders;
  }

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getAllPackageOrders);
  }, []);


  return (
    <div className='packages-orders'>
      <Nav />
      <div className='packages-orders-content'>
        <h1>Ordered Packages Requests</h1>
        <table >
          <thead >
            <tr>
              <th>User id</th>
              <th>Package id</th>
              <th>Products id</th>
              <th>photographer id</th>
              <th>Notes</th>
              <th>Medical Issues</th>
              <th>Special Food</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {orders && orders.map((user) => {
            return <tbody key={user.id}>
              <tr>
                <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={user.imageprofile.includes('https') ? user.imageprofile : `https://sophisticated-steel-production.up.railway.app/${user?.imageprofile}`} alt='img' style={{ width: '70px', borderRadius: '50%' }} />
                  <h5 style={{ marginLeft: '10px' }}>{user.username}</h5>
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  {user.userRole}
                </td>
                <td>
                  {user.phonenumber}
                </td>
                <td>
                  {user.gender}
                </td>
                <td>
                  {user.capabilities.includes("canBookTrip") ? "Active" : "Hold"}
                </td>
                <td>
                  {user.capabilities.includes("canBookTrip") ? '' : <button className='active-button' onClick={() => ''}>Verify User</button>}
                  <button className='delete-button' onClick={() => ''}>Delete User</button>
                </td>
              </tr>
            </tbody>
          })}
        </table>
      </div>
    </div>
  )
}

export default PackagesOrders
