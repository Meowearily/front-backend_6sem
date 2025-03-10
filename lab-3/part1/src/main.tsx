import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
// import App from './App.tsx'
import Buttons from './Buttons.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Buttons count={5} />
  </StrictMode>,
)
