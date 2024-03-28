import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Authenticated } from './Authenticated.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticated>
      <App />
    </Authenticated>
  </React.StrictMode>,
)
