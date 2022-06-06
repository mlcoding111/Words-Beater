import styled from 'styled-components'

type Props = {}

const Leaderboard = (props: Props) => {
  return (
    <Board>
      <tr>
        <th>Name</th>
        <th>Difficulty</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>Michael</td>
        <td>Hard</td>
        <td>250</td>
      </tr>
     
    </Board>
  )
}

export default Leaderboard

export const Board = styled.table`
  margin: 3rem !important;
  border-collapse: collapse;
  width: 100%;
  color: white;
  th{
    color: var(--primary-color);
    background: #1d1d1d;
  }
  td, th {
    border: 1px solid var(--primary-color);
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #424242;
  }
`