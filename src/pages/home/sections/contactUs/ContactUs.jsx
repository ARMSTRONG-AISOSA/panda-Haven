import React from 'react';
import './contactUs.css';
import Button from '../../../../components/button/Button';

const ContactUs = () => {
  return (
    <div className='cUDivSection'>
      {/* Left Side: Google Maps Embed */}
      <div className='cULeftSide'>

        <h3 className='cULSText'>Our Address</h3>

        <iframe
          className='iframeContact'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6727095.627807667!2d103.14866541874999!3d34.58608581624519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sng!4v1735408413377!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
      <div className='cURightSide'>
        <h3 className='cURSText'>Contact Us</h3>

        <form
          // onSubmit={handleFormSubmit}
          className='cURSForm'
        >

          <div className='formGroup'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              name='name'
              // value={FormData.name}
              // onChange={handleChange}
              placeholder='Enter Full Name'
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id='email' //used to associate the input with a <label>
              name='email' //atrb defines the key under which the value of this input will be sent when submitting a form.
              // It allows the backend (or form handlers) to identify this specific field.
              // value={FormData.email}
              // Binds the input field's value to the React component's state (formData.name).
              // Ensures that the value displayed in the input is always synchronized with the component's state.
              // onChange={handleChange}
              // Tan event handler triggered whenever the user types/changes the input value.
              // The handleChange function updates the formData state dynamically with the new value the user enters.

              placeholder='Enter Email'
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="message">Message</label>
            <textarea
              id='message'
              name='message'
              // value={FormData.message}
              // onChange={handleChange}
              placeholder='Enter Email'
              required
            />< textarea />
          </div>

          {/* <div className='formGroup'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div> */}

          <Button
            className='cFSendBtn'
            type="submit"
            label="Send Message"
            variant="sec"
            onClick={() => alert('Donate Btn Clicked')} />
        </form>
      </div>
    </div>
  )
}

export default ContactUs
