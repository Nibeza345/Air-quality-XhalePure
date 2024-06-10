import React from "react";
import image1 from '../../assets/home/image1.jpg'
import image2 from '../../assets/home/image2.jpg'
import image3 from '../../assets/home/image3.jpg'

const bg_styles = {
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  objectFit: 'cover',
  zIndex: '-1',
};

const Background = ({ heroCount }) => {
  const images = [image1, image2, image3];
  return <img src={images[heroCount]} style={bg_styles} alt={`image${heroCount + 1}`} />;
};

export default Background;
