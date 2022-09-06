import React from 'react'
import { CounterButton } from './Counterbutton'
import { CounterProvider } from './CounterProvider'

const App = () => {
  return (
    <CounterProvider>
    <div>App</div>
    <CounterButton />
    </CounterProvider>
  )
}

export default App