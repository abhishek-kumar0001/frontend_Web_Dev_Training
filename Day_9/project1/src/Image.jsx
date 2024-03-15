import React from "react";
import Image1 from "./assets/images/mobile.png";
import Image2 from "./assets/images/mypicture.jpg";
import style from "./image.module.css"

function Image() {
  return (
    <div className={style.imageContainer}>
      <img src={Image1} alt="mobile Image"/>
      <img src={Image2} alt="mypicture"/>
    </div>
  )
}

export default Image;
