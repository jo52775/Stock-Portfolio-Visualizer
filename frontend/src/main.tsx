import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const main = document.getElementById('root');

if(!main){
  throw new Error('Root container not found.');
}

createRoot(main).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
