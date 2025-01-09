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


            <form action="">

              <div className='formGroups'>
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  id='userName'
                  name='userName'
                  // value={FormData.userName}
                  // onChange={handleChange}
                  placeholder='Enter Full Name'
                  required
                />
              </div>

              <div className='formGroups'>
                <label htmlFor="message">Message</label>
                <textarea
                  id='message'
                  name='message'
                  // value={FormData.message}
                  // onChange={handleChange}
                  placeholder='Enter Email'
                  required
                />
              </div>

              <div>
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
