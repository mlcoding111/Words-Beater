import React from 'react'
import Form from '../components/Form'
import Leaderboard from '../components/Leaderboard';
import InfoBoard from '../components/InfoBoard';

import { MyGlobalContext } from '../global/MyGlobalContext';

import Game from '../components/Game';

import { Header, Main, Footer, Layout } from './styles'


type Props = {}

const App = (props: Props) => {
  const [gameStatus, setGameStatus] = React.useState<string>("Menu")
  const [difficulty, setDifficulty] = React.useState<string>("")

  // This function run when user choose a difficulty
  const handleDifficulties = (e: string) => {
    // Set difficulty then pass it to game component
    setDifficulty(e)
  }

  const setClass = () => {
    if(difficulty === "Easy"){
      return "easy"
    }else if(difficulty === "Normal"){
      return "normal"
    }else{
      return "hard"
    }
  }

  return (
    <Layout>
      <MyGlobalContext.Provider value={{gameStatus, setGameStatus}}>

      <Header>
          <h1>Words Beater</h1>
          {gameStatus === "Menu" ? <p>Be the best at typing</p> : <span className={setClass()}>( {difficulty} )</span>}          
      </Header>

      <Main>      
        {gameStatus !== "Menu" ? null : <><InfoBoard /> </>}
        {gameStatus === "Menu" ? <Form handleDifficulty={handleDifficulties}/> : <Game difficulty={difficulty}/>}   
        <Leaderboard />
      </Main>

      <Footer>

      </Footer>
      </MyGlobalContext.Provider>

    </Layout>
  )
}

export default App