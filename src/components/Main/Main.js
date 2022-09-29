import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootball } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [singleTime, setSingleTime] = useState([])
    const setTime = (somoy) => {
        const newTime = [...singleTime, somoy]
        setSingleTime(newTime)
        // console.log("clicked", somoy)
        // console.log(newTime)
    }
    // console.log(singleTime)
    // const [timecart, setTimecart] = useState([])


    const notify = () => toast.success("Game is Over");

    return (

        <div className='main'>
            <div className="game-container">
                <div>
                    {/* <img src=""></img> */}
                    <h1> <FontAwesomeIcon icon={faFootball} />Lets-Play</h1>
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
                            singleTime={singleTime}
                            setTime={setTime}
                        ></Break>)
                    }
                </div>

                {/* <Break></Break> */}
                <h3>Excersise Details:</h3>
                <Excersise cart={cart}></Excersise>

                <BreakTime ></BreakTime>
                <button className='complete' onClick={notify}>Excersise Done</button>
                <ToastContainer
                    position="top-right"

                />
            </div>
        </div >
    );
};

export default Main;