import React from 'react';
function Boasvindas() {
    const name = localStorage.getItem('usuario')
    const conta = sessionStorage.getItem('conta')
    return (
      <>
        <h1>Ola {name} bem vindo!</h1>
        <br/>
        <h2>conta multiplicada por 10 = {conta} </h2>
      </>)
  
}
export default Boasvindas;