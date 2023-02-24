import React from "react";
import "./CurrentWeather.css";

function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Nairobi</p>
          <p className="weather-description">Sunny</p>
        </div>

        <img className="weather-icon" src="icons/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">20°C</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind speed</span>
            <span className="parameter-value">2 km/h</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">23%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">23 Pa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
