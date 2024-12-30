import React, { useState } from 'react';
import './contactUs.css';
import Button from '../../../../components/button/Button';

const ContactUs = () => {

  // State Management
  const [formData, setFormData] = useState({
    //name/key : 'value',
    userName: '',
    email: '',
    message: ''
  });

  // Functions
  // Handle input changes
  const handleChange = (e) => {
    // Each input in the form has a name attribute corresponding to a key in the formData state.
    const { name, value } = e.target;
    // Destructuring e.target
    // e.target: Refers to the specific input element that triggered the event.
    // e.target.name identifies which input field was changed (name === key).
    // e.target.value gets the current value of the input field.


    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic (e.g., send to an API)
    alert('Message sent!');
  };

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
          // allowfullscreen=""
          loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>
      </div>
      <div className='cURightSide'>
        <h3 className='cURSText'>Contact Us</h3>

        <form
          onSubmit={handleSubmit}
          className='cURSForm'
        >

          <div className='formGroup'>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              id='userName'
              name='userName'
              value={FormData.userName}
              onChange={handleChange}
              placeholder='Enter Full Name'
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email' //used to associate the input with a <label>
              name='email' //atrb defines the key under which the value of this input will be sent when submitting a form.
              // It allows the backend (or form handlers) to identify this specific field.
              value={FormData.email}
              // Binds the input field's value to the React component's state (formData.name).
              // Ensures that the value displayed in the input is always synchronized with the component's state.
              onChange={handleChange}
              // event handler triggered whenever the user types/changes the input value.
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
              value={FormData.message}
              onChange={handleChange}
              placeholder='Enter Email'
              required
            />
          </div>


          <div>
            <Button
              className='cFSendBtn'
              type="submit"
              label="Send Message"
              variant="sec"
            // onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;


// Note: Destructuring is a convenient way to extract values from arrays or objects and assign them to variables. It enhances clarity, reduces redundancy, and is widely used in modern JavaScript development.

// Instead of accessing properties via object.property, destructuring pulls out only what you need.

// ex.
// const name = user.name;
// const age = user.age;
// INSTEAD
// const { name, age } = user;
