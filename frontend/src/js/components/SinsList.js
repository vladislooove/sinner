import React from 'react';
import SinCard from './SinCard';

const SinsList = (props) => {
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
                             additional={sin.additional}
                             onDelete={props.onDelete} />
                )
            })}
        </div>
    )
}

export default SinsList;