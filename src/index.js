import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Packages from './components/Packages';
import Orders from './components/Orders';
import Login from './components/Login';
import Addpackage from './components/Addpackage';
import Photographers from './components/Photographers';
import { Provider } from 'react-redux';
import store from './store/store';
import  Products from '../src/components/Products';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
    <Routes>
    <Route path='/addpackage' element={<Addpackage />} />
      <Route path='/' element={<App />} />
      <Route path='/packages' element={<Packages />}>
      </Route>
      <Route path='/orders' element={<Orders />} />
      <Route path='/login' element={<Login />} />
      <Route path='/photographers' element={<Photographers/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
  </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
