import React from 'react';
import './Break.css'
const Break = () => {

    return (
        <div>
            <h4>Add a break</h4>
            <div className='personal-info'>
                <button className='btn'><p>10s</p></button>
                <button className='btn'><p>20s</p></button>
                <button className='btn'><p>30s</p></button>
                <button className='btn'><p>40s</p></button>
            </div>
        </div>
    );
};

export default Break;