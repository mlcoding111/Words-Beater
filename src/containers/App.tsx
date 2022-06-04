import React from 'react'
import Form from '../components/Form'

import { Header, Main, Footer, Layout } from './styles'

type Props = {}

const App = (props: Props) => {
  return (
    <Layout>

      <Header>
          <h1>Words Beater</h1>
          <p>Be the best at typing</p>
      </Header>

      <Main>        
        <Form />
      </Main>

      <Footer>

      </Footer>
      
    </Layout>
  )
}

export default App