
import React from "react";
import Test from "./Test";
import Card from "./Card";
import "./assets/Images/mobile.png"
import "./App.css";

function App() {
  const h2Style = {
    color:"green",
    fontSize:"25px",
    marginTop:"20px",
    textAlign:"center"
  }
  return (
    <div>
      <h1 style={{marginTop:"20px",color:"blue",fontSize:"40px",textAlign:"center"}}>React Demo</h1>
      <h2 style={h2Style}>This is React Demo</h2>
      <Test/>
      <div className="cardContainer">
        <Card
            img ="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70"
            productName = "iPhone 15 Pro Max"
            rate = "Rs.89,999"
            des="This is iphone 15 Pro Max"
          />

        <Card
          img ="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70"
        
          productName="Realme C53 5G"
          rate = "Rs.9,999"
          des="This is Realme C53"
        />

        <Card
          img ="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/f/w/-original-imags37hy7uz2usv.jpeg?q=70"
        
          productName="Redmi 12 5G"
          rate = "Rs.9,499"
          des="This is Redmi 12 5G"
        />
      </div>
      
    </div>
  )
}

export default App;
