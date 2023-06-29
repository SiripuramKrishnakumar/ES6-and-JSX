import './Card.css'
import React from 'react';

function Card(props)
{

    const classNames = "card "+ props.className;

    return <div className={classNames}> {props.children}</div>
}

export default Card;