import React, { useState } from 'react';
import humidityIcon from "./logos/humidity.svg";
import locationIcon from "./logos/location.svg";
import pressureIcon from "./logos/pressure.svg";
import sunIcon from "./logos/sun.svg";
import windIcon from "./logos/wind.png";
import rainIcon from "./logos/rain.png";
import cloudIcon from "./logos/cloud.svg";

const api = {
  key: "b6228baea56a726f334d05eaae6c3eea",
  base: "api.openweathermap.org/data/2.5/weather?"
}

export default function App() {
  /*const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }*/

  const date = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${day}, ${date} ${month}`;
  }

/*
  function formateTime(t){
    let hour = t.getHours();
    let min = t.getMinutes();
    let det = hour >= 12 ? "pm" : "am";
    hour = hour % 12;
    hour = hour ? hour : 12;
    min = min < 10 ? `0${min}` : min;
    let timeNow = `${hour}:${min} ${det}`;
    return timeNow;
  }
 // const now = formateTime(new Date());
 const now = new Date().toLocaleTimeString();

  const [time, newTime] = useState(now);

  function updateTime() {
    const newT = new Date().toLocaleTimeString();
    newTime(newT);
  }

  setTimeout(updateTime, 1000);
 */ 
  return (
    <div className="App sun">

      <div className="city">
        <div className="name">
          <h2><img src={locationIcon} alt="location-icon" width="25px" />Patna</h2>
        </div>
        <div className="date">
          {date(new Date())}
        </div>
        <div className="time">
          <h1>8:30pm</h1>
        </div>
      </div>

      <div className="temp-box">
        <div className="temp">
          35°c
          </div>
        <div className="temp-icon">
          <img src={sunIcon} alt="Temp-Icon" width="50px" />
          <h3>Sunny</h3>
        </div>
      </div>

      <hr/>
      <div className="detail-box">
        <div className="comp">
          <img src={windIcon} alt="Wind-Icon" width="50px" />
          <p>Wind</p>
          <h3>20 Km/h</h3>
        </div>
        <div className="comp">
          <img src={pressureIcon} alt="Wind-Icon" width="50px" />
          <p>Pressure</p>
          <h3>2.5 atm</h3>
        </div>
        <div className="comp">
          <img src={humidityIcon} alt="Wind-Icon" width="50px" />
          <p>Humidity</p>
          <h3>20 %</h3>
        </div>
      </div>

    </div>

  );
}