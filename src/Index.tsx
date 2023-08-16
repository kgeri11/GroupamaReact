import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './theme.scss'
import '@fontsource/open-sans'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const rootDiv = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
