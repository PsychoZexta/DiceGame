import React from 'react'

export default function EntryScreen(props) {
    return (
        <div id="home">
            <img src="../DiceGame/img/dices 1.png" alt="Dies" className='die-img' />
            <div className="left">
                <h1 id="home-heading">DICE GAME</h1>
                <button className="play-now" onClick={props.handleClick}>Play Now</button>
            </div>
        </div>
    )
}
