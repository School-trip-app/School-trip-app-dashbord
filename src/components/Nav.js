import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Nav.css';
import cookies from 'react-cookies';

function Nav({ setLogin }) {
  const handlerLogout = () => {
    setLogin(false);
    cookies.remove('token');
    cookies.remove('user');
    cookies.remove('capabilities');
  }
  return (
    <div className='Nav' >
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='list'>
        <ul>
          <Link to='/'><li>
            Dashboard
          </li>
          </Link>
          <Link to='/packages'><li>
            Packages
          </li>
          </Link>
          <Link to='/orders'><li>
            Orders
          </li>
          </Link>
          <Link to='/photographers'>
            <li>
              Photographers
            </li>
          </Link>
          <Link to='/products'>
            <li>
              Products
            </li>
          </Link>
          <li onClick={handlerLogout}>
            Log out
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
