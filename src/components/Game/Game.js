
import './Game.css'
const Game = (props) => {



    return (
        <div className='game'>
            <img src={props.game.img} alt=""></img>
            <div className='info'>
                <h1>{props.game.name}</h1>
                <p>Time:{props.game.time}</p>
            </div>
            <button onClick={() => props.addToCartHandler(props.game)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>

    )
};

export default Game;