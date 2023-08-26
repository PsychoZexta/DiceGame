import React from 'react'
import Rules from './Rules';

export default function RollDice(props) {

    const [showRules, setShowRules] = React.useState(false);
    function toggleRules() {
        setShow(prevShow => !prevShow)
        setShowRules(prevState => !prevState)
    }
    const [show, setShow] = React.useState(true);



    return (
        <div className='roll-dice'>
            <img src={`../DiceGame/img/dice/${props.dice}.png`} alt={`${props.dice} number dice`} className='dice' onClick={props.rollDice} />
            <h3>Click Dice to Roll</h3>
            <button className="reset-score" onClick={props.resetScore}>Reset Score</button>
            <button className="show-rules" onClick={toggleRules}>{show ? "Show" : "Hide"} Rules</button>
            {showRules && <Rules />}
        </div>
    )
}
