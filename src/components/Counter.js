import React, { useState } from 'react';

export default function(){
    const [counter, setCounter] = React.useState(0)
    
    function add(){
    setCounter(prevState => (prevState + 1))
    }

    function substract(){
        if(counter >= 1){
        setCounter(prevCount => prevCount - 1)
        }
    }
    

    return(
      <div className="counter">
         <button onClick={substract}>-</button>
            <div>{counter}</div>
         <button onClick={add}>+</button>
      </div>
    )
  }