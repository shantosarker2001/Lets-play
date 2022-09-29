import React from 'react';
import "./Excersise.css"
const Excersise = (props) => {
    // console.log(props.cart)
    let total = 0;
    for (const game of props.cart) {
        total = total + game.time

    }
    return (
        <div>
            <div className='time'>

                <h4>Excersise Time:</h4>
                <p>{total} min</p>
            </div>
        </div>
    );
};

export default Excersise;