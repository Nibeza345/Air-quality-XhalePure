import React, { useEffect } from "react";
import arrow_btn from '../../assets/home/arrow_btn.png';

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
const hero_explore = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '5vh',
  padding: '5px 10px',
  borderRadius: '30px',
  background: '#fff',
  cursor: 'pointer',
};
const hero_explore_p = {
  color: '#292929',
  fontSize: '3vw',
  fontWeight: 500,
};
const hero_dot_play = {
  marginTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
};
const hero_dots = {
  display: 'flex',
  alignItems: 'center',
  gap: '2vw',
  listStyle: 'none',
};
const hero_dot = {
  height: '2vw',
  width: '2vw',
  borderRadius: '50%',
  background: '#fff',
  cursor: 'pointer',
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
      <div style={hero_explore}>
        <p style={hero_explore_p}>Explore features</p>
        <img src={arrow_btn} alt="arrow_btn" />
      </div>
      <div style={hero_dot_play}>
        <ul style={hero_dots}>
          {heroData.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              style={{
                ...hero_dot,
                background: heroCount === index ? 'orange' : '#fff',
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
