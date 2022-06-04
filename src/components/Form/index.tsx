import React from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'

import Input from '../Reusable/Input'

type Props = {}

const difficulties = ["Easy", "Normal", "Hard"]

const Form = (props: Props) => {
  return (
    <Wrapper>
        <div className="name-input">
            <label>
                Name :
                <Input />
            </label>
        </div>

        <div className="difficulties-input">
            {difficulties.map((item, index) => (
                <label>
                    {item}
                  <Input />
                </label>
            ))}      
        </div>
     
        <Button />
        
    </Wrapper>
  )
}

export default Form


export const Wrapper = styled.form`

`