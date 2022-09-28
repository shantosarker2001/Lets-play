import React from 'react';

const Game = (props) => {
    const { name, img, time } = props.game
    return (
        <div>
            <img src={img} alt="image of playing cricket"></img>
            <h1>This is game</h1>
        </div>
    );
};

export default Game;