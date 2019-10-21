import React from 'react';
import './style.css';

function Nav(){
    return (
        <nav className='fixed-top'>
            <ul className='nav row'>
                <li className='nav-item col-md-4'>
                    <h1 className='text-center text-light mt-4 mb-4 font-weight-bold'><a href='/'>Clicky Game</a></h1>
                </li>
                <li className='nav-item col-md-4'>
                    {/* code will go here for the nav center. */}
                    <h1 className='text-center text-light mt-4 mb-4'>You guessed correctly!</h1>
                </li>
                <li className='nav-item col-md-4'>
                    <h1 className='text-center text-light mt-4 mb-4'>Score:<span>0</span> | Top Score: <span>10</span></h1>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;