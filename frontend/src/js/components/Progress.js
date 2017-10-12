import React from 'react';

import ProgressCircle from 'react-progress-circle';

const Progress = (props) => {
    let progress = 0;
    props.sins.map((item)=>{
        progress += item.circle;
    }) 

    return (
        <ProgressCircle
            backgroundColor="#000"
            labelColor="#000"
            color="#e22d22"
            labelSize="47px"
            size="218"
            status={progress}
        />
    )
}

export default Progress;