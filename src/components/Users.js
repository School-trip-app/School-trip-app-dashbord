import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/User.css';
import { FaImage } from 'react-icons/fa'



function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await axios.get('https://sophisticated-steel-production.up.railway.app/user').then(res => {
      setUsers(res.data);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    });
  }
  const handlerActiv = async (id) => {
    await axios.put(`https://sophisticated-steel-production.up.railway.app/user/${id}`).then(res => {
      console.log(res);
      getUsers();
    }).catch(error => {
      console.log(error);
    });
  };
  const handlerDelete = async (id) => {
    await axios.delete(`https://sophisticated-steel-production.up.railway.app/user/${id}`).then(res => {
      console.log(res.data);
    }).then(() => {
      getUsers();
    })
  };
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className='users'>
      <div className='text'>
        <h1 className='text-title'>Users Information</h1>
      </div>
      <table >
        <thead >
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UserRole</th>
            <th>Phonenumber</th>
            <th>Status</th>
            <th>School Documents</th>
            <th>Verify / Delete User</th>
          </tr>
        </thead>
        {users && users.map((user) => {
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
                {user.capabilities.includes("canBookTrip") ? "Active" : "Hold"}
              </td>
              <td>
                <a href={`https://sophisticated-steel-production.up.railway.app/${user?.image}`} rel='noreferrer' target='_blank'><FaImage /></a>
              </td>
              <td>
                {!user.capabilities.includes("canBookTrip") && user.userRole === 'school' ? <button className='active-button' onClick={() => handlerActiv(user.id)}>Verify User</button> : ''}
                <button className='delete-button' onClick={() => handlerDelete(user.id)}>Delete User</button>
              </td>
            </tr>
          </tbody>
        })}
      </table>
    </div >
  )
}

export default Users
