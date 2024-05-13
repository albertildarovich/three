import React from 'react'
import ReactDOM, { Container } from 'react-dom/client'
import App from '../pages/main'
import 'reset-css';

ReactDOM.createRoot(document.getElementById('root') as Container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
