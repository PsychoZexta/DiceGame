import React from 'react'
import RollDice from './RollDice'
import GameHeader from './GameHeader'

export default function Game() {

    //For setting number
    const [currentNumber, setCurrentNumber] = React.useState(0);

    const [activeNumber, setActiveNumber] = React.useState(undefined);

    function setNumber(element) {
        setActiveNumber((prevActive) => {

            if (prevActive === undefined) {
            }
            else {
                prevActive.classList.remove('active');
            }

            element.target.classList.add('active');
            return element.target
        })
        setCurrentNumber(() => {
            return element.target.innerText;
        })
    }

    //For Rolling Dice

    const [dice, setDice] = React.useState(1);

    let [score, setScore] = React.useState(0);

    function rollDice() {
        //For setting Score
        if (currentNumber !== 0) {
            const random = Math.floor(1 + (Math.random() * (7 - 1)));
            setDice(() => random);
            (random == currentNumber ? setScore(score += Number(currentNumber)) : setScore(score -= 2))
        }
        else {
            alert("Please Select a Number before Rolling a Dice")
        }
        //Setting selected numbers to 0
        setCurrentNumber(0);
        //Setting the style of selected number to default
        setActiveNumber((prevActive) => {
            if (prevActive === undefined) {
            }
            else {
                prevActive.classList.remove('active');
            }
        });

    }

    //Reset Score
    const resetScore = () => {
        setScore(0);
        setActiveNumber((prevActive) => {
            if (prevActive === undefined) {
            }
            else {
                prevActive.classList.remove('active');
            }
        });

    }
    return (
        <>
            <GameHeader setNumber={setNumber} score={score} />
            <RollDice dice={dice} rollDice={rollDice} resetScore={resetScore} />
        </>
    )
}
