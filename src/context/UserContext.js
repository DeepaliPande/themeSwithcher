import { createContext, useContext } from 'react';
const UserContext = createContext({
    user:{
     "Name":"Deepali",
     "Age":"26",
     "City":""
    },
    setCity:(city)=>{},
    }
)
//-----------provider-------------
const UserProvider=UserContext.Provider;

//----------custom hooks-----------
const useUserData=()=>
{
    return useContext(UserContext);
}
export { UserContext,UserProvider ,useUserData};
