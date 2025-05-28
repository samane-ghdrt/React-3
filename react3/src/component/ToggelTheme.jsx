import "../app.css";
import { useState } from "react";
export default function ToggleTheme(){
    const [isDarkTheme,setDarkTheme]=useState("true");
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme)
          }
    return(
        <div>
<p></p>
<button onClick={toggleTheme}>click</button>

        </div>
    )
};