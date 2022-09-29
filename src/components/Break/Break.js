import React from 'react';
import './Break.css'
const Break = (props) => {
    console.log(props.cart)
    return (
        <div >
            <button className='btn' onClick={() => props.setTime(props.time)
            }> {props.time}</button >
        </div >
    );
};

export default Break;