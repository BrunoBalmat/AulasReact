import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

const [resposta, setResposta] =useState()

  // fetch('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/.json')
  // .then(response => response.json())
  // .then(data => setResposta(data));
    useEffect(()=>{
    axios.get('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/.json')
    .then(function (response) {
      setResposta(response.data);
    })
}, [])
  return (
      <div>
        {resposta?.masculinas.tipo}       
        {
          Object.values(resposta.femininas).map(roupa =>{
            return(
              <p>{roupa?.tipo}</p>
            )         
          })
        }
      </div>
  )
}
export default App;

 
         