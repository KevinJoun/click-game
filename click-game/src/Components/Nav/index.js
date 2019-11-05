import React from 'react';
import './style.css';

function Nav(props){
    return (
        <nav className='fixed-top'>
            <ul className='nav row'>
                <li className='nav-item col-md-4'>
                    <h1 className='text-center text-light mt-4 mb-4 font-weight-bold'><a href='/'>Clicky Game</a></h1>
                </li>
                <li className='nav-item col-md-4'>
                    <h1 className='text-center text-light mt-4 mb-4'>{props.guessStatus}</h1>
                </li>
                <li className='nav-item col-md-4'>
                    <h1 className='text-center text-light mt-4 mb-4'>Score:{props.score} | Top Score: {props.topScore}</h1>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;