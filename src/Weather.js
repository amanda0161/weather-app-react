import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "d414cd8393114b6507bbc8a468b4ae73";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <Loader
      type="Puff"
      color="orange"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
