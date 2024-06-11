import React, { useState } from "react";
import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  const heroData = [
    { text1: "Breathe", text2: "Clean Air" },
    { text1: "Monitor", text2: "Air Quality" },
    { text1: "Stay", text2: "Informed" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero heroData={heroData} heroCount={heroCount} setHeroCount={setHeroCount} />
    </div>
  );
};

export default Home;
