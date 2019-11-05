import React from 'react';
import './style.css';

function Card(props) {
    return (
   
        <img onClick={()=>props.handleclick(props.id)} src={props.image} alt={props.alt} className='img-thumbnail'/>
 
    );
}

export default Card;
