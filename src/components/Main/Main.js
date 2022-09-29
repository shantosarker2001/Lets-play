import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import BreakTime from '../BreakTime/BreakTime';
import Excersise from '../Excersise/Excersise';
import Game from '../Game/Game';
import TimeTable from '../TimeTable/TimeTable';
import User from '../User/User'
import './Main.css'
const Main = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    const [cart, setCart] = useState([])
    const addToCartHandler = (game) => {
        const newCart = [...cart, game]
        setCart(newCart)
    }

    const times = ['10s', '20s', '30s', '40s']
    const [timecart, setTimecart] = useState([])
    const setTime = (time) => {
        const newtimeCart = [...timecart, time]
        setTimecart(newtimeCart)
        // console.log(newtimeCart)
    }
    return (
        <div className='main'>
            <div className="game-container">
                <div>
                    {/* <img src=""></img> */}
                    <h1>Lets-Play:{games.length}</h1>
                    <h3>Select your game</h3>
                    <div className='container'>
                        {
                            games.map(game => <Game
                                game={game}
                                key={game.key}
                                addToCartHandler={addToCartHandler}
                            ></Game>)
                        }
                    </div>
                </div>
            </div>
            <div className="timetable">
                <User></User>
                <TimeTable></TimeTable>
                <h4>Add a break</h4>
                <div className='btn-container'>
                    {
                        times.map(time => <Break
                            time={time}
                            setTime={setTime}
                        ></Break>)
                    }
                </div>

                {/* <Break></Break> */}
                <h3>Excersise Details:</h3>
                <Excersise cart={cart}></Excersise>
                <BreakTime></BreakTime>
                <button className='complete'>Excersise Done</button>
            </div>
        </div >
    );
};

export default Main;