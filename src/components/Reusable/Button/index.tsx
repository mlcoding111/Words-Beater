import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  text: string,
  type: string,
  handleSubmit?: () => void
}

const Button:FC <Props> = ({text, type, handleSubmit}) => {
  return (
    <Wrapper>
      <h2>{text}</h2>
    </Wrapper>
  )
}

export const Wrapper = styled.button`
  padding: .3rem 2rem;
  color: var(--primary-color);
  border: 1px solid transparent;
  background: var(--secondary-color);

  :hover{
    border: 1px solid var(--primary-color);
    cursor: pointer;
  }
`

export default Button