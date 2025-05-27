import { useState } from "react"

export default function Counter(){
    const {count,setCount}=useState(0);
    function increase(){
     setCount(count+1)
    };
    function decreases(){ 
setCount(count-1)
    };
    function reset() {
        setCount(0)
    };
return(
  
    <div>
          <p>"count:"{count}</p>
<button onClick={increase}>increase</button>
<button onClick={decreases}>decreases</button>
<button onClick={reset}>reset</button>
    </div>
)

};