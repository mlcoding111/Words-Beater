import React from 'react'
import Form from '../components/Form'
type Props = {}

const App = (props: Props) => {
  return (
    <>
      <header>
          <h1>Words Beater</h1>
          <p>Be the best at typing</p>
      </header>

      <main className='game-wrapper'>        
        <Form />
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App