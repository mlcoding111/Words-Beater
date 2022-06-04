import React from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'

import Input from '../Reusable/Input'

type Props = {}

const difficulties = ["Easy", "Normal", "Hard"]

const Form = (props: Props) => {

    const [value, setValue] = React.useState<string>("")

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        console.log("Name : " , e.currentTarget.value)
    }

  return (
    <Wrapper>
        <div className="name-input">
            <label>
                Name :
                <Input type="text" value={value} name="name" handleChange={handleChange}/>
            </label>
        </div>

        <div className="difficulties-input">
            {difficulties.map((item, index) => (
                <label>
                    {item}
                  <Input type="radio" name="name"/>
                </label>
            ))}      
        </div>
     
        <Button text="Start"/>
        
    </Wrapper>
  )
}

export default Form


export const Wrapper = styled.form`
    color: white;

    .name-input{
        margin-top: 2em;
    }
    div{
        margin: 1em 0;
    }

    input{
        margin: 0 1em;
    }
`