import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import TimeTable from '../TimeTable/TimeTable';
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
                    {/* <img src=""></img> */}
                    <h1>Lets-Play:{games.length}</h1>
                    <h3>Select your game</h3>
                    <div className='container'>
                        {
                            games.map(game => <Game game={game}></Game>)
                        }
                    </div>

                </div>

            </div>
            <div className="timetable">
                <TimeTable></TimeTable>
            </div>
        </div >
    );
};

export default Main;