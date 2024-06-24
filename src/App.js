import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [resposta, setResposta] = useState()
  const [modelo, setModelo] = useState()
  const [marca, setMarca] = useState()
  const [cor, setCor] = useState()
  const [valor, setValor] = useState()
  const [editado, setEditado] = useState()

  // fetch('https://concessionaria-1111f-default-rtdb.firebaseio.com/roupas/.json')
  // .then(response => response.json())
  // .then(data => setResposta(data)); 

  useEffect(() => {
    axios.get('https://concessionaria-1111f-default-rtdb.firebaseio.com/carros/.json')
      .then(function (response) {
        setResposta(response.data);
      })
  })

  const cadastro = () => {
    axios.post('https://concessionaria-1111f-default-rtdb.firebaseio.com/carros/esportivos/.json', {
      cor: cor,
      marca: marca,
      modelo: modelo,
      valor: valor
    })


  }
  const deletar = (id) => {
    axios.delete(`https://concessionaria-1111f-default-rtdb.firebaseio.com/carros/esportivos/${id}.json`, {})

      .then(function (response) {
        alert('Carro deletada')
      }).catch(function () {
        alert('Carro não deletada')
      })
  }
  const editar = (id) => {
    axios.patch(`https://concessionaria-1111f-default-rtdb.firebaseio.com/carros/esportivos/${id}.json`, { modelo: editado })

      .then(function (response) {
        alert('Carro editada')
      }).catch(function () {
        alert('Carro não editada')
      })
  }


  return (
    <div>

      {/* {resposta?.masculinas.tipo} */}
      {
        resposta && Object.entries(resposta?.esportivos).map(carro => {
          return (
            <>
              <p>
                {carro[1]?.marca}-
                {carro[1]?.modelo}-
                {carro[1]?.cor}-
                {carro[1]?.valor}-
              </p>
              <input onChange={(e) => { setEditado(e.target.value) }}></input>
              <button onClick={() => deletar(carro[0])}>Excluir</button>
              <button onClick={() => editar(carro[0])}>Editar modelo</button>
            </>
          )
        })
      }
      <h2>cadastro de roupas</h2>
      <fomr>
        <label> Marca: </label>
        <input onChange={(e) => setMarca(e.target.value)} /><br />
        <label> Modelo: </label>
        <input onChange={(e) => setModelo(e.target.value)} /><br />
        <label> Cor: </label>
        <input onChange={(e) => setCor(e.target.value)} /><br />
        <label> Valor: </label>
        <input onChange={(e) => setValor(e.target.value)} /><br />
        <button onClick={() => cadastro()}>Cadastrar</button>
      </fomr>
    </div>
  )
}
export default App;


