import styled from 'styled-components'

type Props = {}

const InfoBoard = (props: Props) => {
  return (
    <Board>
      <div className="header">
        <h3>Instruction</h3>
        <hr />
      </div>

      <div className="body">
          <ol className="steps-list">
            <li>Enter your name</li>
            <li>Choose a difficulty</li>
            <li>Type as fast as you can !</li>
          </ol>
      </div>
    </Board>
  )
}

export default InfoBoard

export const Board = styled.table`
  margin: 2rem !important;
  box-shadow: 0px 0px 15px black;
  border-radius: 15px;
  padding: 1rem;
  text-align: left;
  width: 100%;
  background: var(--secondary-color);
  color: #dbdbdb;

  hr{
    width: 30%;
    border-color: var(--primary-color);
  }
  h3{
    text-align: center;
    color: #e6a937;
  }
  .body{
    padding: 1rem;
  }
`