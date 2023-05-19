import React from 'react'
import spinner from "./spinner.gif"
const Spinner =()=> {
    return (
      <div className='text-center'>
        <img src={spinner} className='my-5' width='100px'alt="loading..."/>
      </div>
    )
  }
export default Spinner;
