import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current-city">
        <h1>{props.data.city}</h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix float-right">
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-temperature">
            <span>
              <WeatherTemperature celcius={props.data.temperature} />
            </span>
          </div>
          <span className="weather-icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </span>
        </div>
      </div>
    </div>
  );
}
