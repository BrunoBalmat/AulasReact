import {Louco} from './utils'; 
import './App.css';
import React from 'react';



function App() {

  return (
    <form>
      <input onChange={(e) => {Louco(e.target.value)}}/>
      <button onClick={(e) =>{}}>Enviar</button>
    </form>
  );
}

export default App;
