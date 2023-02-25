import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  // console.log(forecastDays)
  return (
    <div>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <label className="day">{forecastDays[index]}</label>

                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label className="title-label">Pressure</label>
                    <label className="value-label">
                      {item.main.pressure} Pa
                    </label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label className="title-label">Humidity</label>
                    <label className="value-label">{item.main.humidity}%</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label className="title-label">Clouds</label>
                    <label className="value-label">{item.clouds.all}</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label className="title-label">Wind Speed</label>
                    <label className="value-label">{item.wind.speed}km/h</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label className="title-label">Sea level</label>
                    <label className="value-label">
                      {item.main.sea_level}m
                    </label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label className="title-label">Feels like</label>
                    <label className="value-label">
                      {Math.round(item.main.feels_like)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Forecast;
