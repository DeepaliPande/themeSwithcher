import { useState } from 'react';
import './App.css';
import PostComp from './components/Post';
import { ThemeProvider,useTheme } from './context/Themecomtext';
function App() {
  const {light,dark,lightColor,darkColor,lightTxtColor,darkTxtColor}=useTheme();
const [theme,setTheme]=useState(light);
const handleClick=()=>
{
  theme!==light?
  setTheme(light):setTheme(dark)
  }
  return (
    <ThemeProvider value={{theme,handleClick,light}}>
    <div className={`main-container ${theme===light ?`${lightColor} ${lightTxtColor}`:`${darkColor} ${darkTxtColor}`}`}>
    <div className="text-center">
     <h1>Light dark theme project</h1>
     <PostComp theme={theme}/>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
