import React from 'react'
import Spinner from '../assets/spinner.gif'
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={Spinner} alt='Loading' />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
