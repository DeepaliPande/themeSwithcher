import { useState } from 'react';
import './App.css';
import PostComp from './components/Post';
import { ThemeProvider,useTheme } from './context/Themecomtext';
import { UserProvider, useUserData } from './context/UserContext';
import Button from './common/Button';
function App() {
  const {light,dark,lightColor,darkColor,lightTxtColor,darkTxtColor}=useTheme();
 const {user}=useUserData();
const [theme,setTheme]=useState(light);
const [Usercity,setUserCity]=useState(user.City);
const handleClick=()=>
{
  theme!==light?
  setTheme(light):setTheme(dark)
  }
  const setCity=(name)=>
  {
    setUserCity(name);
  }
  return (
    <ThemeProvider value={{theme,handleClick,light}}>
      <UserProvider value={{user,Usercity}} >
    <div className={`main-container ${theme===light ?`${lightColor} ${lightTxtColor}`:`${darkColor} ${darkTxtColor}`}`}>
    <div className="text-center">
     <h1>Light dark theme project by {user.Name} from {Usercity}</h1>
     <PostComp theme={theme}/>
     <button className={`btn  ${theme!==light ?` btn-light `:`btn-dark`}`} onClick={e=>{setCity("Nainital")}}>Get City</button>
    </div>
    </div>
    </UserProvider>
    </ThemeProvider>
  );
}

export default App;
