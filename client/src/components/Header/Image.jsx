import React from 'react'
import image from './img/mainFood.jpg'

export default function Image() {
  return (
    <div className="main-img">
      <img src={image} alt="main img" className="img" />
    </div>
  );
}
