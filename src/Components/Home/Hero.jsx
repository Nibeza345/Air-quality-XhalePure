import React, { useEffect } from "react";

const hero = {
  margin: '0 10%',
  marginTop: '20vh',
  textAlign: 'center',
};
const hero_text = {
  color: '#fff',
  fontSize: '8vw',
  fontWeight: 500,
};

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === heroData.length - 1 ? 0 : count + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, [heroData.length, setHeroCount]);

  if (!heroData[heroCount]) {
    return null;
  }

  return (
    <div style={hero}>
      <div style={hero_text}>
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>
    </div>
  );
};

export default Hero;
