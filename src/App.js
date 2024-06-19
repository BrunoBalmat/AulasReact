import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [corinthians, setCorinthians] = useState(0)
  const [saopaulo, setSaopaulo] = useState(0)
  const [brasil, setBrasil] = useState(0)
  const [jogador1, setJogador1] = useState()
  const [jogador2, setJogador2] = useState()
  const [jogador3, setJogador3] = useState()
  const [jogador4, setJogador4] = useState()
  const [jogador5, setJogador5] = useState()
  const [jogador6, setJogador6] = useState()
  const [jogador7, setJogador7] = useState()
  const [jogador8, setJogador8] = useState()
  const [jogador9, setJogador9] = useState()
  const [jogador10, setJogador10] = useState()
  const [jogador11, setJogador11] = useState()
 
  useEffect(()=> {
    if (corinthians === 1){
      setJogador1 ('jogador do corinthians 1')
      setJogador2 ('jogador do corinthians 2')
      setJogador3 ('jogador do corinthians 3')
      setJogador4 ('jogador do corinthians 4')
      setJogador5 ('jogador do corinthians 5')
      setJogador6 ('jogador do corinthians 6')
      setJogador7 ('jogador do corinthians 7')
      setJogador8 ('jogador do corinthians 8')
      setJogador9 ('jogador do corinthians 9')
      setJogador10('jogador do corinthians 10')
      setJogador11('jogador do corinthians 11')
      setBrasil(0)
      setSaopaulo(0)
    }
    if (saopaulo === 1){
      setJogador1 ('jogador do São Paulo 1')
      setJogador2 ('jogador do São Paulo 2')
      setJogador3 ('jogador do São Paulo 3')
      setJogador4 ('jogador do São Paulo 4')
      setJogador5 ('jogador do São Paulo 5')
      setJogador6 ('jogador do São Paulo 6')
      setJogador7 ('jogador do São Paulo 7')
      setJogador8 ('jogador do São Paulo 8')
      setJogador9 ('jogador do São Paulo 9')
      setJogador10('jogador do São Paulo 10')
      setJogador11('jogador do São Paulo 11')
      setCorinthians(0)
      setBrasil(0)
    }
    if (brasil === 1){
      setJogador1('jogador do Brasil 1')
      setJogador2('jogador do Brasil 2')
      setJogador3('jogador do Brasil 3')
      setJogador4('jogador do Brasil 4')
      setJogador5('jogador do Brasil 5')
      setJogador6('jogador do Brasil 6')
      setJogador7('jogador do Brasil 7')
      setJogador8('jogador do Brasil 8')
      setJogador9('jogador do Brasil 9')
      setJogador10('jogador do Brasil 10')
      setJogador11('jogador do Brasil 11')
      setCorinthians(0)
      setSaopaulo(0)
    }
    
  }
)
//==============================

  const [acionador, setAcionador] = useState(0)
  const [teste1a, setTeste1a] = useState('a')
  const [teste1b, setTeste1b] = useState('b')
  const [teste1c, setTeste1c] = useState('c')
  const [teste1d, setTeste1d] = useState('d')
  const [teste1e, setTeste1e] = useState('e')
  const [teste1f, setTeste1f] = useState('f')
  const [teste1g, setTeste1g] = useState('g')
  const [teste1h, setTeste1h] = useState('h')
  const [teste1i, setTeste1i] = useState('i')
  const [teste1j, setTeste1j] = useState('j')

  useEffect(() => {
    if (acionador % 2 === 0) {
      setTeste1a(1)
      setTeste1b(2)
      setTeste1c(3)
      setTeste1d(4)
      setTeste1e(5)
      setTeste1f(6)
      setTeste1g(7)
      setTeste1h(8)
      setTeste1i(9)
      setTeste1j(10)
    }
    else {
      setTeste1a('a')
      setTeste1b('b')
      setTeste1c('c')
      setTeste1d('d')
      setTeste1e('e')
      setTeste1f('f')
      setTeste1g('g')
      setTeste1h('h')
      setTeste1i('i')
      setTeste1j('j')
    }
  }, [acionador])

  return (
    <>
      <div>
        <button onClick={() => { setCorinthians(1) }}>Corinthians</button>
        <button onClick={() => { setSaopaulo(1) }}>São Paulo</button>
        <button onClick={() => { setBrasil(1) }}>Brasil</button><br/>
        {jogador1}<br/>
        {jogador2}<br/>
        {jogador3}<br/>
        {jogador4}<br/>
        {jogador5}<br/>
        {jogador6}<br/>
        {jogador7}<br/>
        {jogador8}<br/>
        {jogador9}<br/>
        {jogador10}<br/>
        {jogador11}<br/>
      </div>
      <div>
        <button onClick={() => { setAcionador(acionador + 1) }}>Mudar os nomes</button>
        - {teste1a}
        - {teste1b}
        - {teste1c}
        - {teste1d}
        - {teste1e}
        - {teste1f}
        - {teste1g}
        - {teste1h}
        - {teste1i}
        - {teste1j}
      </div>
    </>
  );
}
export default App;
