import React, { useState } from 'react';
import './login.css';
import Navbar from '../../components/navbar/Navbar';
import { signUpImg } from "../../assets/images/images";
import Button from '../../components/button/Button';

// Icons
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

  // State Management
  const [showPassword, setShowPassword] = useState(false);

  // Functions
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signUpSection'>
      <div className='sUImgSection'>
        {/* img */}
      </div>

      <div className='sURightSection'>
        <form className='sUFormSection'>
          <h3>Login</h3>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder='Enter Email Address'
            />
          </div>


          {/* Password */}
          <div className='passwordInput'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Enter Your Password'
            />
            <span
              onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <p
            className='fLoginText'
          >Forgot your Password? <Link to="#">Click Here</Link></p>


          <Button
            className='fSubmitBtn'
            label="Login"
            variant="sec"
            type="submit"
            onClick={() => alert('Submit Btn Clicked')}
          // onClick={() => window.location.href='https://www.facebook.com'}
          />

          <div className='orSeparator'>
            <p>OR</p>
          </div>

          <div className='sUBtnDiv'>
            <Button
              className='sUBtn'
              label="Facebook"
              variant="sec"
              onClick={() => alert('Facebook Btn Clicked')}
            // onClick={() => window.location.href='https://www.facebook.com'}
            >
              <FaFacebookF className='sUBtnIcon' />
            </Button>


            <Button
              className='sUBtn'
              label="Google"
              variant="tert"
              onClick={() => alert('Gogle Us Btn Clicked')}
            // onClick={() => window.location.href='https://www.google.com'}
            >
              <FaGoogle className='sUBtnIcon' />
            </Button>
          </div>

          <p
            className='fLoginText'
          >Don't have an Account? <Link to="/signup">Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
