import React from 'react'
import './App.css'
import GlobalState from './context/GlobalState'
import Button from './components/Button.js'

const App = props => { 
  return (
    <GlobalState> 
      <div>
        <Button/>
      </div>
    </GlobalState>
    
  );
}

export default App