import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Authenticated } from './Authenticated.tsx'
import { MenuModuleProvider } from './menu/MenuModuleProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticated>
      <MenuModuleProvider>
        <App />
      </MenuModuleProvider>
    </Authenticated>
  </React.StrictMode>,
)
