import React from "react";
import { useState } from "react";
import "../App.css";
import { useStateContext } from "../context";
import BackgroundLayout from "./BackgroundLayout";
import WeatherCard from "./WeatherCard";
import MiniCard from "./MiniCard";
import Header from './Header';



function Weather() {
  const [input, setInput] = useState("");
  const { weather, location, values, setPlace } = useStateContext();

  const handleSearch = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">

      <BackgroundLayout />
      <Header/>
      <main className="w-full flex flex-col gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Weather;
