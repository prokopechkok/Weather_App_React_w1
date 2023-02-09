import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div className="Weather">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt="cloudy"
                  id="icon"
                  class="float-left"
                />
                <span class="float-left">
                  <strong id="temperature">{weatherData.temperature}</strong>
                  <span class="units">
                    <a href="#" id="celsius-link" class="active">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> m/h
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="overview">
                <h1 id="city">{weatherData.city}</h1>
                <ul>
                  <li>
                    <span id="date">{weatherData.date}</span>
                  </li>
                  <li id="description">{weatherData.description}</li>
                </ul>
              </div>
            </div>
            <div class="col-6">
              <form id="search-form" class="">
                <input
                  type="search"
                  placeholder="Type a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-30"
                />
              </form>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/prokopechkok/Vanilla_Weather_App_Plus"
            id="footer"
          >
            Open-source code
          </a>
          by Khrystyna Prokopechko
        </small>
      </div>
    </div>
  );
}
