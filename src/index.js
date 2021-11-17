import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//using chakra in app
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>   {/*wrapping with chakra provider to enable chakra ui in full app*/}
      <ColorModeScript initialColorMode='light'/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

