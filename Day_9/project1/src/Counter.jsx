import React, { useState } from "react";
import style from "./counter.module.css"

function Counter() {
    let [counter,setCounter] = useState(0)

    function increase(){ 
        setCounter(++counter); 
        console.log(counter);
         
    }

    function decrease(){
        if(counter > 0){
            setCounter(--counter);
        }
        
    }

  return (
    <div>
        <h2 style={{textAlign:"center",marginTop:"50px",color:"#78370b"}}>Counter App</h2>
        <div className={style.counterWrapper}>
        <button id={style.btnInc} onClick={increase}>Inc</button>
        <div>{counter}</div>
        <button id={style.btnDec} onClick={decrease}>Dec</button>
    </div>
    </div>
  )
}

export default Counter;
