import React from 'react';
import { useTheme } from '../context/Themecomtext';
import SubChild from './SubChild';
const Post = () => {
    const {light,handleClick,theme}=useTheme();
    return (
        <div>
            <h4>My post with {theme}</h4>
            <button className={`btn  ${theme!==light ?` btn-light `:`btn-dark`}`} onClick={handleClick}>Change Theme</button>
            <SubChild/>
        </div>
    );
}
export default Post;
