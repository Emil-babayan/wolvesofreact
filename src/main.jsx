import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataCTX from './context/DataCTX.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataCTX>
        <App />
      </DataCTX>
    </BrowserRouter>
  </React.StrictMode>,
)
