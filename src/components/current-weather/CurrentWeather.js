import React from 'react'
import "./CurrentWeather.css"

function CurrentWeather() {
  return (
    <div className='weather'>
        <div className='top'>
            <p className='city'>Nairobi</p>
            <p className='weather-description'>Sunny</p>
        </div>
        <img className='weather-icon' src='' alt='weather' />
    </div>
  )
}

export default CurrentWeather