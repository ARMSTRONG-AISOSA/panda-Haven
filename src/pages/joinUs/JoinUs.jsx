import React from 'react';
import './joinUs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import Button from '../../components/button/Button';

const JoinUs = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        headTxt="Join Us Today!"
        subHeadTxt="Join us in protecting our gentle giants and their natural habitats."
        classHidden="hidden"
      />

      <div className='container'>
        <div className='joinUsSection'>

          {/* Top */}
          <div className="joinUsContent">
            <h3 className='titleUnderline'>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p> <br />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>

          {/* Bottom */}
          <div className="joinUsRegister">


            <form action="" className='jUForm'>

              <div className='jUFTitle'>
                <h3 className='titleUnderline'>Register</h3>
                <p>Register and Become an Official Member of Ours!</p>
              </div>

              <div className='jFormGroups'>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id='lastName'
                  name='lastName'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Last Name'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id='firstName'
                  name='firstName'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter First Name'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="otherName">Other Name</label>
                <input
                  type="text"
                  id='otherName'
                  name='otherName'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter other Name'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Your Email'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id='country'
                  name='country'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Your Country'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id='state'
                  name='state'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Your State'
                  required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id='address'
                  name='address'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Your Address'
                // required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="userId">Upload Id</label>
                <input
                  type="file"
                  id='userId'
                  name='userId'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Upload User Id'
                // required
                />
              </div>

              <div className='jFormGroups'>
                <label htmlFor="userImage">Upload Headshot</label>
                <input
                  type="file"
                  id='userImage'
                  name='userImage'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Upload User Image'
                // required
                />
              </div>

              <div className='jUBtn'>
                <Button
                  className='cFSendBtn'
                  type="submit"
                  label="Apply"
                  variant="sec"
                // onClick={handleSubmit}
                />
              </div>

            </form>

          </div>

        </div>

        <Footer />
      </div>
    </div>
  )
}

export default JoinUs
