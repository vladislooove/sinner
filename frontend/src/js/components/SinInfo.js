import React from 'react';

import { infernoData } from '../localData/data';

const SinInfo = (props) => {
    var currentSinInfo;
    infernoData.map((item) => {
        if(item.circle == props.circle){
            currentSinInfo = item;
        }
    })
    if(currentSinInfo){
        return (
            <article className='sin-info'>
                <img src={`/images/circle/detailed/${currentSinInfo.circle}.jpg`} 
                    alt={`currentSinInfo.name`} 
                    className="sin-info__media"/>
                <h1 className='sin-info__name'>
                    {currentSinInfo.name}
                </h1>
                <div className='sin-info__circle'>
                    <span className="sin-info__circle-label">
                        Коло
                    </span>
                    <span className="sin-info__circle-value">
                        {currentSinInfo.circle}
                    </span>
                </div>
                <div className='sin-info__content'>
                    {currentSinInfo.description}
                </div>
            </article>
        )
    }
    return null;
}

export default SinInfo;