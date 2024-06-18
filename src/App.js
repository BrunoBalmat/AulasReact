import {Louco, Click} from './utils'; 
import './App.css';
import React from 'react';



function App() {

  return (
    <form>
      <input onChange={(e) => {Louco(e.target.value +'--é muito louco--')}}/>
      <button onClick={(e) =>{Click()}}>Enviar</button>
    </form>
  );
}

export default App;
