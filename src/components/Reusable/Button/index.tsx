import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  text: string,
  type?: string,
  handleSubmit?: () => void,
  handleClick?: () => void,
  disableCondition?: boolean
}

const Button:FC <Props> = ({text, type, handleSubmit, handleClick, disableCondition}) => {
  return (
    <Wrapper onClick={handleClick} disabled={disableCondition} >
      {<h2>{text}</h2>}
    </Wrapper>
  )
}

export const Wrapper = styled.button`
  padding: .3rem 2rem;
  color: var(--primary-color);
  border: 1px solid transparent;
  background: var(--secondary-color);

  :disabled,
  :disabled:hover{
    color: grey;
    border: 1px solid grey;
    cursor: default;
  }

  :hover{
    border: 1px solid var(--primary-color);
    cursor: pointer;
  }
`

export default Button