import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import '../styles/packagesOrders.css'

function PackagesOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllPackageOrders();
  }, []);

  async function getAllPackageOrders() {
    const url = 'https://sophisticated-steel-production.up.railway.app/package/order';
    const ordersData = await axios.get(url);
    const orders = ordersData.data;
    setOrders(orders);
    console.log(orders);
  }

  return (
    <div className='packages-orders'>
      <Nav />
      <div className='packages-orders-content'>
        <h1>Ordered Packages Requests</h1>
        <table >
          <thead >
            <tr>
              <th>User Name</th>
              <th>Package Name</th>
              <th>Products id</th>
              <th>photographer Name</th>
              <th>Notes</th>
              <th>Medical Issues</th>
              <th>Special Food</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map((user, index) => (
              <tr key={index}>
                <td>{user.user.username}</td>
                <td>{user.package.packageName}</td>
                <td>{`${user.productIds}`}</td>
                <td>{user.photographer.name}</td>
                <td>{user.notes}</td>
                <td>{user.medicalIssues}</td>
                <td>{user.specialFood}</td>
                <td>{Math.floor(Math.random() * 501)}.0 JD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PackagesOrders
