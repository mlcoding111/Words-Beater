import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'
import Input from '../Reusable/Input'

type Props = {}


const words = ['House', 'Hero', 'Scale', 'School', 'Desk']


const Game:FC <Props>= () => {
    let wordDisplay = document.getElementById("current-word") as HTMLInputElement
    const timeLimit = 15;
    const [count, setCount] = useState(timeLimit);
    const [currentWord, setCurrentWord] = useState("")
    const [history, setHistory] = useState<any>([])
    const [score, setScore] = useState(0) 
    const [success, setSuccess] = useState<boolean>(false)

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
            wordDisplay.innerText = "Victory !"
            setSuccess(true)
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
        let firstWord = words[Math.floor(Math.random() * words.length)]
        setCurrentWord(firstWord)
        setHistory((oldHistory: any) => [...oldHistory, firstWord])
    }, [])

    // Timer
    useEffect(()=> {     
        if (count >= 0 && !success){
            setTimeout(() => 
                    setCount(count - 1)
              ,1000)     
        }else{
            console.log('game on hold')
        }      
        console.log(success)
        console.log(count)
    })

    const handleClick = () => {
        setCount(15)
        setSuccess(value => !value)
        setHistory([])
        setScore(0)
        randomize()
    }

    const countDown = () => [
        !success || count >= 0 ? <span id="countdown">Time left : <b>{count}</b></span> : <span>Time over</span>
    ]


  return (
    <Wrapper>

        <h1 id="current-word">{currentWord.split("").map(function(char, index){
            return <span aria-hidden="true" key={index} id={`letter-${index}`}>{char}</span>
        })}</h1>

        <Input type="text" name="word" handleChange={handleChange}/>
        <p className="game-info">
            {countDown()}
            <span id="countdown">Score : <b>{score}</b></span>
        </p>
        <Button text="Play Again" handleClick={handleClick}/>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h1, input, p{
        margin: 2rem 0;
    }
    .game-info{
        padding-block: 2rem;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: green;
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