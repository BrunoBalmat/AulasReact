import './App.css';
import React, { useState } from 'react';

function App() {

  const [teste1, setTeste1] = useState('fulano')
  const [teste2, setTeste2] = useState('ciclano')
  const [multiplicador, setMultiplicador] = useState(1)

  const funcao = () => {

    if (teste1 === 'fulano') {
      setTeste2('beltrano')
    }
    if (teste2 === 'beltrano') {
      setTeste1('Fernando')
    }
    if (teste1 === 'Fernando') {
      setTeste1('fulano')
      setTeste2('ciclano')
    }
    setMultiplicador(multiplicador * 4)
  }
  return (
    <>
      <button onClick={() => {funcao()}}>Botão</button>
       O {teste1} com {teste2} e mais {multiplicador}
    </>
  );
}
export default App;
