import { createContext,useContext } from "react";
 //------create context------
 const ThemeConext= createContext({
    light:"light",
    dark:"dark",
    lightColor:"bg-light",
    darkColor:"bg-dark",
    lightTxtColor:"text-dark",
    darkTxtColor:"text-white"
 });

 //-------provider------------
 const ThemeProvider=ThemeConext.Provider;

 //--------custum hooks---------------
 const useTheme=()=>
 {
  // return useContext(ThemeConext);
   return useContext(ThemeConext);
 }
 export {useTheme,ThemeProvider,ThemeConext}