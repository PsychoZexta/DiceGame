import React from 'react'

export default function GameHeader(props) {

   

    const numberArray = [1, 2, 3, 4, 5, 6];
    const numbers = numberArray.map(number => <div key={number} className='number' onClick={props.setNumber}
    >{number}</div>);


    return (
        <div className='game-header'>
            <div className='score-section'>
                <h1 className="score">{props.score}</h1>
                <p className="score-label">Total Score</p>
            </div>
            <div className='select-number'>
                <div className="container">
                    {numbers}
                </div>
                <h3>Select Number</h3>
            </div>
        </div>
    )
}
