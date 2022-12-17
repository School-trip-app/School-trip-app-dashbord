import axios from 'axios'
import React, { useState } from 'react'
import base64 from 'base-64';
import cookies from 'react-cookies';

function Login({setLogin}) {
  const [errorMessage, setError] = useState('');
  const [stateError, setState] = useState(false);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    const encoded = base64.encode(`${user.username}:${user.password}`);
    await axios.post('https://sophisticated-steel-production.up.railway.app/signin', {}, {
      headers: {
        Authorization: `Basic ${encoded}`
      }
    }).then(res => {
      cookies.save('token',res.data.token);
      cookies.save('user',res.data.username);
      cookies.save('capabilities',res.data.capabilities) 
      console.log("Data", res.data);
      setLogin(true);
    }).catch(err => {
      setError(err.response.data);
      setState(true);
      console.log(err || err.message);
    });
  }
  return (
    <div className='full-page'>
      <div className='form-signup' >
        <form className='signup-form' onSubmit={handlerSubmit}>
          <div className='title'>
            <h2 style={{ color: '#49BEB7', textAlign: 'center', fontSize: '35px' }} >Login Form</h2>
          </div>
          <label>Username</label>
          <input placeholder='Username' type='text' id='username' />
          <label>Password</label>
          <input placeholder='Password' type='password' id='password' />
          {stateError && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
