import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { global } from './StyleGlobal/global.js'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={global}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
