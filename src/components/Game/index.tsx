import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../Reusable/Input'

type Props = {}


const words = ['House', 'Hero', 'Scale', 'School', 'Desk']


const Game:FC <Props>= () => {
    let wordDisplay = document.getElementById("current-word") as HTMLInputElement

    const [count, setCount] = useState(15);
    const [currentWord, setCurrentWord] = useState("")
    const [history, setHistory] = useState<any>([])
    const [score, setScore] = useState(0) 
    const [success, setSuccess] = useState<boolean>(false)

    const randomize = () => {
        let word = words[Math.floor(Math.random() * words.length)]

        if(history.length !== words.length){
            // Loop until we get the next word randomly
            do{
                word = words[Math.floor(Math.random() * words.length)]
            }while(history.includes(word))
    
            setHistory((oldHistory: any) => [...oldHistory, word])
            setCurrentWord(word);
        }else{
            wordDisplay.innerText = "Victory !"
            setSuccess(true)
        }
    }

    const handleChange = (e : any) => {
        console.log(history)
        let value = e.target.value
        let letter = document.getElementById(`letter-${value.length -1}`) as HTMLElement
        let wordElem = document.getElementById("current-word") as HTMLElement
        var spans = wordElem.getElementsByTagName("span");  

        // If the letter is matching
        if(value.charAt(value.length -1) === currentWord.charAt(value.length - 1)){
            letter.style.color = "green"
            console.log("match")
        }

        // If the user word is matching the currentWord
        if(value === currentWord){            

            // Change color of the next word letters to whiite
            for(var a = 0; a < spans.length; a++) {
                spans[a].style.color = "white"
            }
            console.log("You're right, moving to the next word")            
            // Reset input field
            e.target.value = ""
            randomize()
        }
        // Win Condition
        if(history.length - 1 === words.length ){
            setSuccess(true)
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
            let time = setTimeout(() => 
                    setCount(count - 1)
              ,1000)     
        }else{
            let elem = document.getElementById("countdown") as HTMLInputElement
            elem.innerHTML = "Time is over !"
            return;
        }        
       
    })


  return (
    <Wrapper>
        {/* <h1>{count === 0 ? currentWord : null}</h1> */}
        {/* <button onClick={() => setCount(15)}>Randomize</button> */}

        <h1 id="current-word">{currentWord.split("").map(function(char, index){
            return <span aria-hidden="true" key={index} id={`letter-${index}`}>{char}</span>
        })}</h1>

        <Input type="text" name="word" handleChange={handleChange}/>
        <p className="game-info">
            <span id="countdown">Time left : <b>{count}</b></span>
            <span id="countdown">Score : <b>{score}</b></span>
        </p>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
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