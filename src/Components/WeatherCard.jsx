import React, { useEffect, useState } from "react";
import { useDate } from "../utils/useDate";
import "../index.css";

import sun from "../assets/icons/sunny.png";
import cloudy from "../assets/icons/cloudy.png";
import fog from "../assets/icons/fog.png";
import rainy from "../assets/icons/rainy.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/stormy.png";
import wind from "../assets/icons/wind.png";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(snow);
  const { date, time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloudy);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rainy);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature}&deg;C
        </p>
      </div>

      <div className="font-bold text-center text-xl">{place}</div>

      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{date}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>

      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <span className="font-normal"> {windspeed} km/h</span>
        </p>

        <p className="flex-1 text-center p-2 rounded-lg bg-green-600">
          Humidity <span className="font-normal">{humidity} gm/m&#179;</span>
        </p>
      </div>

      <div className="w-full mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg"> Heat index </p>
        <p className="text-lg"> {heatIndex ? heatIndex : "N/A"} </p>
      </div>

      <hr className="bg-slate-600" />

      <div className="w-full p-4 justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;