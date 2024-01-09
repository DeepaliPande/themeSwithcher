import React from 'react';
import { useTheme } from '../context/Themecomtext';

const Button = ({value}) => {
    const {light,handleClick,theme}=useTheme();
    return (
        <button className={`btn  ${theme!==light ?` btn-light `:`btn-dark`}`} onClick={handleClick}>{value}</button>
    );
}

export default Button;
