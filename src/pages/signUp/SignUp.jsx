import React, { useState } from 'react';
import './signUp.css';
import Navbar from '../../components/navbar/Navbar';
import { signUpImg } from "../../assets/images/images";
import Button from '../../components/button/Button';

// Icons
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {

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
          <h3>Sign up</h3>

          {/* Firstname */}
          <div>
            <input
              type="text"
              placeholder='Enter First Name'
            />
          </div>

          {/* Lastname */}
          <div>
            <input
              type="text"
              placeholder='Enter Last Name'
            />
          </div>


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


          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder='Confirm Your Password'
            />
          </div>


          <Button
            className='fSubmitBtn'
            label="Sign Up"
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
          >Already have an Account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
