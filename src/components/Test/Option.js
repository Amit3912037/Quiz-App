import React from 'react';
import './Option.css'

export default function Option(props) {
    return (
        <div
            id={props.id}
            className={`option ${props.selectedAnswer === props.id ? 'active' : ''}`}
            onClick={(e) => { props.clickHandler(e) }}
        >
            {props.optionText}
        </div>
    )
}
