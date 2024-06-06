import React, { useState } from "react";
import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  
  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
};

export default Home;
