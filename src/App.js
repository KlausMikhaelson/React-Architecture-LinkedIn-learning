import React from 'react'
import { CounterButton } from './Counterbutton'
// import { CounterProvider } from './CounterProvider'
import { RecoilRoot } from "recoil"

const App = () => {
  return (
    <RecoilRoot>
    <div>App</div>
    <CounterButton />
    </RecoilRoot>
  )
}

export default App