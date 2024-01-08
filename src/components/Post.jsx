import React from 'react';
import { useTheme } from '../context/Themecomtext';
const Post = () => {
    const {light,handleClick,theme}=useTheme();
    return (
        <div>
            <h4>My post with {theme}</h4>
            <button className={`btn  ${theme!==light ?` btn-light `:`btn-dark`}`} onClick={handleClick}>Dark</button>
        </div>
    );
}
export default Post;
