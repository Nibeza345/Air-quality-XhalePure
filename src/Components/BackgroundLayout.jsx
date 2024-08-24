import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
// images
import clear from "../assets/images/clear.jpg";
import fog from "../assets/images/fog.jpg";
import cloudy from "../assets/images/cloudy.jpg";
import rainy from "../assets/images/rainy.jpg";
import snow from "../assets/images/snow.jpg";
import stormy from "../assets/images/stormy.jpg";
import sunny from "../assets/images/sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(clear);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(fog);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(cloudy);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(snow);
      } else if (imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder')) {
        setImage(stormy);
      } else if (imageString.toLowerCase().includes('sunny')) {
        setImage(sunny);
      }
    }
  }, [weather]);

  return (
    <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
  );
};

export default BackgroundLayout;
