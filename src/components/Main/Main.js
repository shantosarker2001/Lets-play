import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Main.css'
const Main = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <div className='main'>
            <div className="game-container">
                <div>
                    <img src=""></img>
                    <h1>Lets-Play</h1>
                    <h3>Select your game</h3>
                    {
                        games.map(game => <Game
                            game={game}
                            key={game.id}
                        ></Game>)
                    }
                </div>

            </div>
            <div className="timetable">
                <h1>Time-Table</h1>
            </div>
        </div>
    );
};

export default Main;