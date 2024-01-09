import { createContext,useContext } from "react";
import { createContext,useContext } from "react";
 //------create context------
 const ButtonConext= createContext({
    Submit:"Submit",
    add:"add",
    dark:"Dark",
    light:"Light",
 });

 //-------provider------------
 const ButtonProvider=ButtonConext.Provider;

 //--------custum hooks---------------
 const useButton=()=>
 {
  // return useContext(ThemeConext);
   return useContext(ButtonConext);
 }
 export {useButton,ButtonProvider,ButtonConext}