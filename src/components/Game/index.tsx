import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'
import Input from '../Reusable/Input'

import { useGlobalContext } from '../../global/MyGlobalContext'

type Props = {}


const words = ['Test', 'Mic']


const Game:FC <Props>= () => {
    const {gameStatus, setGameStatus} = useGlobalContext();    
    let wordDisplay = document.getElementById("current-word") as HTMLInputElement
    const timeLimit = 15;
    const [count, setCount] = useState(timeLimit);
    const [currentWord, setCurrentWord] = useState("")
    const [history, setHistory] = useState<any>([])
    const [score, setScore] = useState(0) 

    // handle word randomizer logic
    const randomize = () => {
        let word = words[Math.floor(Math.random() * words.length)]

        // Win condition
        // When user get a word, we push it into history. If history is equal to words array that means the user succeeded.
        if(history.length !== words.length){
            // Make sure we don't ask the same word twice
            do{
                word = words[Math.floor(Math.random() * words.length)]
            }while(history.includes(word))
    
            // Update history and set currentWord
            setHistory((oldHistory: any) => [...oldHistory, word])
            setCurrentWord(word);
        }else{
            setGameStatus("Victory")
            setHistory([])
        }
    }

    // On input change
    const handleChange = (e : any) => {
        let value = e.target.value
        let letter = document.getElementById(`letter-${value.length -1}`) as HTMLElement
        let wordElem = document.getElementById("current-word") as HTMLElement
        let spans = wordElem.getElementsByTagName("span");  

        // If the letter is matching
        if(value.charAt(value.length - 1) === currentWord.charAt(value.length - 1)){
            letter.style.color = "green"
        }

        // If the user word is matching the currentWord
        if(value === currentWord){            
            setScore((oldScore) => oldScore + count)
            // Change color of the next word letters to whiite
            for(let a = 0; a < spans.length; a++) {
                spans[a].style.color = "white"
            }
            console.log("You're right, moving to the next word")            
            // Reset input field
            e.target.value = ""
            randomize()
        }
    }

    // Run once when the page load
    useEffect(()=>{
        StartGame()
    }, [])

    const StartGame = () => {
        let firstWord = words[Math.floor(Math.random() * words.length)]
        setCount(15)
        setScore(0)
        setGameStatus("Playing")
        setCurrentWord(firstWord)
        setHistory((oldHistory: any) => [...oldHistory, firstWord])
    }

    // Timer
    useEffect(()=> {     
        const interval = setTimeout(() =>{
            if(gameStatus === "Playing" && count >= 0){
                setCount(count - 1)
            }
        }, 1000)
        return () => clearTimeout(interval)
    })

    const gameOver = () => {
        if(gameStatus === "Victory" || gameStatus === "Defeat"){
            return false;
        }else{
            return true;
        }
    }


  return (
    <Wrapper>

        {gameOver() ? <h1 id="current-word">{currentWord.split("").map(function(char, index){
            return <span aria-hidden="true" key={index} id={`letter-${index}`}>{char}</span>
        })}</h1> : <h1>Victory !</h1>}
        

        <Input type="text" name="word" handleChange={handleChange}/>
        <p className="game-info">

            {gameOver() || count >= 0 ? <span id="countdown">Time left : <b>{count}</b></span> : <span>Time over</span>}

            <span id="countdown">Score : <b>{score}</b></span>
        </p>
        <div className="button-container">
            <Button text="Play Again" handleClick={StartGame} />
            <Button text="Back to menu" handleClick={() => setGameStatus("Menu")}/>
        </div>

    </Wrapper>
  )
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h1, input, p{
        margin: 1rem 0;
    }

    button{
        margin: 0rem .5rem;
    }
    .game-info{
        padding-block: 2rem;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: #ffff;
        font-size: 1.5rem;
    }
    h1{
        color: white;
        font-size: 4rem;
        font-weight: 400;
    }
    text-align: center;
`

export default Game