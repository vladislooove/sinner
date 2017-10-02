import React from 'react';

const Icon = (props) => {
    return (
        <svg className={`icon icon--${props.icon}`}> 
            <use xlinkHref={`images/svg-symbols.svg#${props.icon}`}></use> 
        </svg>
    )
}

export default Icon;