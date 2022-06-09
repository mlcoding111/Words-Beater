import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'
import Input from '../Reusable/Input'
import { Words} from './data'

import { useGlobalContext } from '../../global/MyGlobalContext'

type Props = {
    difficulty: string
}


const words = ['Test', 'Mic', "Maison", "Papa"]



const Game:FC <Props>= ({difficulty}) => {
    const {gameStatus, setGameStatus} = useGlobalContext();    
    const [count, setCount] = useState<number>(0);
    const [currentWord, setCurrentWord] = useState("")
    const [history, setHistory] = useState<any>([])
    const [score, setScore] = useState(0) 

    // Get the words array from the obj matching the difficulty props
    const getWords = () =>{
        for (const [key, value] of Object.entries(Words)){
            if(key === difficulty){
                return value.words
            }
            console.log(`${key}: ${value.words}   , THIS -> ${difficulty}`)
        }       
    }

    // Do the same has above but we return the time
    const getTime = () => {
        for (const [key, value] of Object.entries(Words)){
            if(key === difficulty){
                console.log(value.time)
                return value.time
            }
        }     
    }

    // Get words of current difficulty and max time clear
    const [words, setWords] = useState<any>(getWords)
    const [time, setTime] = useState<any>(getTime)



    // Logic to reset game if user wants to try again
    const StartGame = () => {
        const firstWord = words[Math.floor(Math.random() * words.length)]
        setCount(time)
        setScore(0)
        setGameStatus("Playing")
        setCurrentWord(firstWord)
        setHistory((oldHistory: any) => [...oldHistory, firstWord])
    }
    

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
        getWords()
        StartGame()
    }, [])

    // Timer
    useEffect(()=> {     
        const interval = setTimeout(() =>{
            if(gameStatus === "Playing" && count >= 1){
                setCount(count - 1)
            }

            if(count === 0){
                setGameStatus("Defeat")
            }
        }, 1000)
        return () => clearTimeout(interval)
    })

    // Handle text content of word location
    const RenderWord = () => {
        console.log(currentWord)
        if(currentWord){
            switch(gameStatus){
                case "Victory":
                    return <h1>Victory !</h1>
                break;
                case "Defeat":
                    return <h1>Defeat</h1>
                break;
                case "Playing":
                    return <h1 id="current-word">{currentWord.split("").map(function(char, index){
                        return <span aria-hidden="true" key={index} id={`letter-${index}`}>{char}</span>
                    })}</h1>
            }
        }
      
    }


  return (
    <Wrapper>

        {/* Take care of rendering the right text depending on the game status */}
        {RenderWord()}        

        {/* User Input */}
        <Input type="text" name="word" handleChange={handleChange}/>

        {/* Game information about score and time */}
        <p className="game-info">
            <span id="countdown">Time left : <b>{count}</b></span>
            <span id="countdown">Score : <b>{score}</b></span>
        </p>

        {/* Buttons to play again or go back to menu */}
        <div className="button-container">
            <Button text="Play Again" handleClick={StartGame} disableCondition={gameStatus == "Playing"} />
            <Button text="Back to menu" handleClick={() => setGameStatus("Menu")}/>
        </div>

    </Wrapper>
  )
}

export default Game

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h1, input, p{
        margin: 1rem 0;
    }
    
    h1{
        font-size: calc(2.2em + 1vmin) !important;
    }

    input{
        transition: border 0.2s ease-in-out;
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

