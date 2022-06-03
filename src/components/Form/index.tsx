import React from 'react'
import styled from 'styled-components'
import Button from '../Reusable/Button'

import Input from '../Reusable/Input'

type Props = {}

const Form = (props: Props) => {
  return (
    <Wrapper>
        <label>Name :
            <Input />
        </label>

        <label>Easy
            <Input />
        </label>

        <label>Casual
            <Input />
        </label>

        <label>Hard
            <Input />
        </label>

        <Button />
        
    </Wrapper>
  )
}

export default Form


export const Wrapper = styled.form`

`