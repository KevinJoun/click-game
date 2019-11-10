import React from 'react';
import './style.css';

function Header(){
    return (
        <div className='header-container'>
            <h1 className='text-center header-h1'>Clicky Game</h1>
            <h2 className='text-center header-h2'>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    )
}

export default Header;