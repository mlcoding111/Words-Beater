import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  type: string,
  value?: string,
  name: string,
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void,
}

const Input:FC <Props> = ({type, value, name, handleChange}) => {
  return (
    <Wrapper type={type} name={name} onChange={(e) => handleChange?.(e)}>
      
    </Wrapper>
  )
}

export const Wrapper = styled.input`
  color: white;
  background-color: var(--secondary-color);
  outline: none;
  border: none;
  border: 1px solid transparent;
  padding: .5rem;

  :focus{
    border: 1px solid var(--primary-color);
  }

`

export default Input