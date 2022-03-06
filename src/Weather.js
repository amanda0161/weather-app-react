import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Manchester",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div>
      <div className="Weather weather-app-wrapper">
        <div className="row">
          <div className="col-8">
            <form className="mb-3">
              <div className="form-group">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <div className="col-4">
            <button type="submit" value="Search" className="search-button">
              Search
            </button>
          </div>
        </div>
        <h1 className="current-city">{weatherData.city}</h1>
        <br />
        <div className="row">
          <div className="col-8">
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>

          <div className="col-4">
            <div className="weather-temperature">
              <strong>{weatherData.temperature}°C</strong>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
        </div>
      </div>

      <small>
        This project is{" "}
        <a
          href="https://github.com/amanda0161/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        and was coded by 📸{" "}
        <a
          href="https://www.urbexadventure.com/"
          target="_blank"
          rel="noreferrer"
        >
          Amanda Charlesworth
        </a>
      </small>
    </div>
  );
}
