import React from 'react';
import SinCard from './SinCard';

const SinsList = (props) => {
    if(props.sins.length){
        return (
            <div className='row'>
                {props.sins.map((sin)=>{
                    return (
                        <SinCard key={sin._id}
                                id={sin._id}
                                name={sin.name}
                                cetegory={sin.category}
                                circle={sin.circle}
                                createdAt={sin.createdAt}
                                additional={sin.additional}/>
                    )
                })}
            </div>
        )
    }
    else{
        return (
            <p>Результатів не знайдено.</p>
        )
    }
}

export default SinsList;