import React from 'react';
import './register.css';
import Button from '../button/Button';


const Register = () => {
  return (
    <div className='registerSection'>
      <div className='rSLeftSide'>
        <h2>Become One of Us</h2>
        <p>Register today and become a member</p>
      </div>

      <div className='rSRightSide'>
        <Button
          className='rBtn'
          label="Register"
          variant="sec"
          onClick={() => alert('Register Btn Clicked')}
        />

        <Button
          className='rBtn'
          label="Contact US"
          variant="tert"
          onClick={() => alert('Contact Us Btn Clicked')}
        />

      </div>
    </div>
  )
}

export default Register;
