import React from 'react';
import "./BreakTime.css"
const BreakTime = (props) => {
    console.log(props)
    return (
        <div>
            <div className='break'>
                <h4>Break Time:</h4>
                <p>seconds</p>
            </div>
        </div>
    );
};

export default BreakTime;