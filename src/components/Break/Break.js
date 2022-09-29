import React from 'react';

import './Break.css'
const Break = (props) => {
    const { setTime, time, singleTime } = props

    return (
        <div>
            <button className='btn' onClick={() => setTime(time)
            }> {props.time}</button >
        </div >
    );
};

export default Break;