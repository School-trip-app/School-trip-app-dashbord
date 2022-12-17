import React, { useEffect, useState } from 'react';
import '../styles/Packages.css';
import Nav from './Nav';
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import '../styles/Main.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Packages() {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    await axios.get('http://localhost:4001/package').then(res => {
      setPackages(res.data);
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    })
  };
  const handlerEditPackge = async () => {

  }
  const handlerDelete = async (id) => {
    await axios.delete(`https://sophisticated-steel-production.up.railway.app/package/${id}`).then(() => {
      getPackages();
    }).catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    getPackages();
  }, []);
  return (
    <div className='packages' style={{ display: 'flex' }}>
      <Nav />
      <div className='main'>
        <div className='calender'>
          <input type='text' placeholder='Search' style={{ width: '300px' }} />
          <select>
            <option>20 012020- 24-02.2020</option>
          </select>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <ManIcon />
            </li>
            <li>
              <FlightIcon />
            </li>
            <li>
              <BedroomChildIcon />
            </li>
            <li>
              <BatteryChargingFullIcon />
            </li>
          </ul>
        </div>
        <div className='new-package'>
          <div className='text'>
            <h1>Add New Package</h1>
            <p>Lorem ipsum is simply dummy text of printing and typesetting</p>
          </div>
          <div className='add-icon'>
            <Link to='/addpackage'><span>+</span></Link>
          </div>
        </div>
        <div className='dispaly-packages'>
          <table className='table-packages'>
            <thead >
              <tr>
                <th>packageName</th>
                <th>city</th>
                <th>locationName</th>
                <th>tripDate</th>
                <th>startingTime - endingTime</th>
                <th>price</th>
                <th>rate</th>
                <th>Edit Package / Delete Package</th>
              </tr>
            </thead>
            {packages && packages.map((pack) => {
              return <tbody key={pack.id}>
                <tr>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={pack.packageImages[1]?.imageUrl} alt='img' style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
                    <h5 style={{ fontWeight: 'normal', letterSpacing: '1px', marginLeft: '20px' }}>{pack.packageName}</h5 >
                  </td>
                  <td>
                    {pack.city}
                  </td>
                  <td>
                    {pack.locationName}
                  </td>
                  <td>
                    {pack.tripDate}
                  </td>
                  <td>
                    {pack.startingTime} - {pack.endingTime}
                  </td>
                  <td>
                    {pack.price}
                  </td>
                  <td>
                    {pack.rate}
                  </td>
                  <td>
                    <button className='active-button' onClick={() => handlerEditPackge(pack.id)}>Edit Package</button>
                    <button className='delete-button' onClick={() => handlerDelete(pack.id)}>Delete Package</button>
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

export default Packages
