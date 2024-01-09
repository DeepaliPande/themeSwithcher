import React from 'react';
import { useUserData } from '../context/UserContext';

const SubChild = () => {
    const {user,Usercity}=useUserData();
    return (
        <div>
            <h3> this is subchild and age of {user.Name} is {user.Age} and city is {Usercity}.</h3>
        </div>
    );
}

export default SubChild;
