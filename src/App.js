import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [resposta, setResposta] = useState()
  const [tipo, setTipo] = useState()
  const [cor, setCor] = useState()
  const [valor, setValor] = useState()

  // fetch('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/.json')
  // .then(response => response.json())
  // .then(data => setResposta(data)); 

  useEffect(() => {
    axios.get('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/.json')
      .then(function (response) {
        setResposta(response.data);
      })
  })

  const cadastro = () => {
    axios.post('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/femininas/.json', {
      cor: cor,
      tipo: tipo,
      valor: valor
    })
      .then(function (response) {
        alert('Roupa cadastrada')
      }).catch(function () {
        alert('roupa não cadastrada')
      })

  }


  return (
    <div>

      {resposta?.masculinas.tipo}
      {
        resposta && Object.values(resposta?.femininas).map(roupa => {
          return (
            <>
              <p>{roupa?.tipo}</p>
              <p>{roupa?.cor}</p>
              <p>{roupa?.valor}</p>
            </>
          )
        })
      }
      <h2>cadastro de roupas</h2>
      <fomr>
        <label> Tipo: </label>
        <input onChange={(e) => setTipo(e.target.value)} />
        <label> Cor: </label>
        <input onChange={(e) => setCor(e.target.value)} />
        <label> Valor: </label>
        <input onChange={(e) => setValor(e.target.value)} />
        <button onClick={() => cadastro()}>Cadastrar</button>
      </fomr>
    </div>
  )
}
export default App;


