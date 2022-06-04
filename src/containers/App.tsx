import React from 'react'
import Form from '../components/Form'

import { Header, Main, Footer } from './styles'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Header>
          <h1>Words Beater</h1>
          <p>Be the best at typing</p>
      </Header>

      <Main>        
        <Form />
      </Main>

      <Footer>

      </Footer>
    </>
  )
}

export default App