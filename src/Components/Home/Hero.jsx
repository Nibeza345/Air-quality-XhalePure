import React, { useEffect } from "react";
import arrow_btn from '../../assets/home/arrow_btn.png';

const hero = {
  margin: '0px 120px',
  marginTop: '270px',
};
const hero_text = {
  color: '#fff',
  fontSize: '110px',
  fontWeight: 500,
};
const hero_explore = {
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
  marginTop: '70px',
  width: 'fit-content',
  padding: '5px 8px',
  paddingLeft: '30px',
  borderRadius: '60px',
  background: '#fff',
  cursor: 'pointer',
};
const hero_explore_p = {
  color: '#292929',
  fontSize: '20px',
  fontWeight: 500,
};
const hero_dot_play = {
  marginTop: '120px',
  display: 'flex',
  justifyContent: 'space-between',
};
const hero_dots = {
  display: 'flex',
  alignItems: 'center',
  gap: '23px',
  listStyle: 'none',
};
const hero_dot = {
  height: '15px',
  width: '15px',
  borderRadius: '7.5px',
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
