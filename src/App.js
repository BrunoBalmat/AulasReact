import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const params = new URLSearchParams(window.location.search);
  let urlParams = undefined;
  params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
      [key]: value.toString()
    })
  }) 
  
  const url = window.location.href
  const splitCarro = url?.split('carro=')[1]
  const splitCarro1 = splitCarro?.split('&')[0];
  
  const splitCor = url?.split('cor=')[1]
  const splitCor1 = splitCor?.split('&')[0];
  
  const splitAno = url?.split('ano=')[1]
  const splitAno1 = splitAno?.split('&')[0];
  
  return (   
    <>  
      <div>
        <a href="http://localhost:3000/lojas?loja=americanas&cores=vermelho&nome=bruno&conducao=fiesta&filha=elie&">link com Querry</a>
        
        
        {urlParams?.conducao === 'fiesta' && <p>fiesta</p>}
        {urlParams?.filha === 'elie' && <p>elie</p>}
        {urlParams?.loja === 'americanas' && <p>americanas</p>}
        {urlParams?.cores === 'vermelho' && <p>vermelho</p>}
        {urlParams?.nome === 'bruno' && <p>bruno</p>}
      </div>
      <div> 
        <a href="http://localhost:3000/carros?carro=hb20&cor=branco&ano=2010&">link com split</a>   
        <div>{splitCarro1}</div>
        <div>{splitCor1}</div>
        <div>{splitAno1}</div>
      </div>
    </>
  )
}
export default App;

 
         