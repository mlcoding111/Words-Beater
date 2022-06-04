import React from 'react'
import Form from '../components/Form'
import { MyGlobalContext } from '../global/MyGlobalContext';

import { Header, Main, Footer, Layout } from './styles'

type Props = {}

const App = (props: Props) => {
  const [gameStatus, setGameStatus] = React.useState<string>("")
  return (
    <Layout>
      <MyGlobalContext.Provider value={{gameStatus, setGameStatus}}>

      <Header>
          <h1>Words Beater</h1>
          <p>Be the best at typing</p>
      </Header>

      <Main>        
        <Form />
      </Main>

      <Footer>

      </Footer>
      </MyGlobalContext.Provider>

    </Layout>
  )
}

export default App