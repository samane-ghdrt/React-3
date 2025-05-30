import '../app.css';
import { useState } from "react";
export default function ToggleTheme(){
    const [isDarkTheme,setDarkTheme]=useState(true);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme)
          }
    return(
        <div>

<button onClick={toggleTheme}><p className={isDarkTheme ? 'dark-theme' : 'light-theme'}>{isDarkTheme ? 'isdark' : 'islight'}</p></button>

        </div>
    )
};