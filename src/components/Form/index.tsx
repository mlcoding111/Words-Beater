import React from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'
import Input from '../Reusable/Input'

import { useGlobalContext } from '../../global/MyGlobalContext'

type Props = {
    handleDifficulty: (e: string) => void
}

const difficulties = ["Easy", "Normal", "Hard"]

const Form = (props: Props) => {
    const {gameStatus, setGameStatus} = useGlobalContext();
    const [value, setValue] = React.useState<string>("")

    // Handle input change
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    
    const handleRadioChange = (e: any) => {
        props.handleDifficulty(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("")
        setGameStatus("Playing")
    }

  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
        <div className="name-input">
            <label>
                Name :
                <Input type="text" value={value} name="name" handleChange={handleChange}/>
            </label>
        </div>

        <div className="difficulties-input">
            {difficulties.map((item, index) => (
                <label key={index}>
                    {item}
                  <Input type="radio" name="difficulty-radio" value={item} handleChange={handleRadioChange}/>
                </label>
            ))}      
        </div>
     
        <Button text="Start" type="submit" />
        
    </Wrapper>
  )
}

export default Form


export const Wrapper = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input{
        margin: 0 1rem;
    }
    .name-input{
        margin-top: 2em;
    }

    div{
        margin: 1em 0;
    }
`