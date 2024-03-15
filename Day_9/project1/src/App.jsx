import React, { useState } from "react";
import "./App.css";
import Image from "./Image";
import Counter from "./Counter";

function App() {
  const [click,setClick] = useState(false);
  let [value,setValue] = useState("")

  function showHideImage(){
    setClick(!click)
  }
  function changeVal(e){
    console.log(e.target.value);
    setValue(value = e.target.value) 
  }
  return (
    <div>
      <Counter/>
      <button id="btnShowHide" onClick={showHideImage}>{click ? "Hide": "Show"}</button>
      {click ? <Image />: ""}
      <div className="inputBox">
        <input type="text" onChange={changeVal}/>
        <div>Value: {value}</div>  
      </div>    
    </div>
  )
}

export default App;
