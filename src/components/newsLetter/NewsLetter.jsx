import React from 'react';
import './newsLetter.css';
import { IoIosMailOpen } from "react-icons/io";
import Button from '../button/Button';

const NewsLetter = () => {
  return (
    <div className='nLSection'>
      <div className='nLSubSection' >
        <div className='nLIconDiv'>
          <IoIosMailOpen className='nLIcon' />
        </div>
        <h3 className='nLH'>Subscribe Newsletter</h3>
        <p className='nLP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <div className='joinUsForm'>
          <input 
          className='joinUsInput'
          type="text"
           />
          <Button
              className='nLBtn'
              type="submit"
              label="Join Us"
              variant="sec"
            // onClick={handleSubmit}
            />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
