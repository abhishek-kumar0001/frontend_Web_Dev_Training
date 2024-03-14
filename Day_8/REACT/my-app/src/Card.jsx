import React from "react";
import "./card.css";

function Card(props) {

  return (
    <div className="card">
        <img src={props.img} style={{backgroundColor:"red"}} alt="product" />
      <div className="details">
        <h3 className="productName">{props.productName}</h3>
        <h4 className="rate">{props.rate}</h4>
        <p className="des">{props.des}</p>
      </div>
    </div>
  )
}

export default Card;
