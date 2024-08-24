import React, { useEffect, useState } from "react";

import sun from "../assets/icons/sunny.png";
import cloudy from "../assets/icons/cloudy.png";
import fog from "../assets/icons/fog.png";
import rainy from "../assets/icons/rainy.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/stormy.png";
import wind from "../assets/icons/wind.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState(sun);

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
    <div className="w-[15rem] h-[10rem] glassCard p-6 flex flex-col">
      <p className="text-center">
        {new Date(time).toLocaleDateString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />

      <div className="w-full justify-center items-center flex-1">
        <img src={icon} alt="weather" className="w-[4rem] h-[4rem]" />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;