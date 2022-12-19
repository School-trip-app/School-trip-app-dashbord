import React from 'react'
import '../styles/Main.css';
import trip from '../images/tr.png';
import Users from './Users';




function Main() {
  return (
    <div className='main'>
      <div className='welcome'>
        <div className='text'>
          <h1>Welcome to JOurney Travels</h1>
          <p>Admins dashboard to control packages, photographers, store, and checking all users and schools registeration documentaion.</p>
        </div>
      </div>
      <p className='text-title'>Overall state</p>
      <div className='statistical'>
        <div className='statistical-box'>
          <h1 style={{ color: 'white' }}>25K</h1>
          <p style={{ color: 'white' }}>Packages travel</p>
        </div>
        <div className='statistical-box'>
          <h1 style={{ color: 'white' }}>220</h1>
          <p style={{ color: 'white' }}>Completed travel</p>
        </div>
        <div className='statistical-box'>
          <h1 style={{ color: 'white' }}>100</h1>
          <p style={{ color: 'white' }}>Active User</p>
        </div>
        <div className='statistical-box'>
          <h1 style={{ color: 'white' }}>20</h1>
          <p style={{ color: 'white' }}>photographers</p>
        </div>
      </div>
      <Users />
    </div>
  )
}

export default Main
