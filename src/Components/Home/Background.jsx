import React from "react";
import image1 from '../../assets/home/image1.jpg'
import image2 from '../../assets/home/image2.jpg'
import image3 from '../../assets/home/image3.jpg'

const bg_styles = {
    height: '100%',
    width: '100%',
    float: 'left',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '0',
    position: 'fixed',
    objectFit: 'cover',
    zIndex: '-1',
}



    const Background = ({heroCount}) => {
    if (heroCount===0) {
                return <img src={image1} style={bg_styles} alt="image1"/>
            } else if(heroCount===1){
            return <img src={image2} style={bg_styles} alt="image2"/>
        }else if(heroCount===2){
        return <img src={image3} style={bg_styles} alt="image3"/>
        }
            }
    

export default Background;