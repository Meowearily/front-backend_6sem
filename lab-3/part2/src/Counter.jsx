import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="btn-group" role="group">
        <button type="button" class="btn mb-3 btn-primary" data-testid='en'>English</button>
        <button type="button" class="btn mb-3 btn-outline-primary" data-testid='ru'>Русский</button>
      </div>
      <button type="button" class="btn btn-info mb-3 align-self-center" data-testid='counter'>0 clicks</button>
      <button type="button" class="btn btn-warning" data-testid='reset'>Reset</button>

      <div class="btn-group" role="group">
        <button type="button" class="btn mb-3 btn-outline-primary" data-testid='en'>English</button>
        <button type="button" class="btn mb-3 btn-primary" data-testid='ru'>Русский</button>
      </div>
      <button type="button" class="btn btn-info mb-3 align-self-center" data-testid='counter'>2 клика</button>
      <button type="button" class="btn btn-warning" data-testid='reset'>Сбросить</button>
    </>
  )
}

export default App
