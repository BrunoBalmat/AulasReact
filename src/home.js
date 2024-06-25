import './App.css';
import React, { useState } from 'react';

function Home() {
    const [conta, setConta] = useState()

    const multiplicar = () => {
        sessionStorage.setItem('conta', conta)
    }
    const entrar = () => {
        localStorage.setItem('usuario', 'Br');
    }
    return (
        <>
            <div>
                <button onClick={() => entrar()}>Eviar nome para local storage</button>
            </div>
            <a href="./boasvindas">link</a>
            <div>
                <input onChange={(e) => setConta(e.target.value * 10)} /><br/><br/>
                <button onClick={() => multiplicar()}>Eviar resultado para sessionStorage</button>
            </div>
        </>
    )
}
export default Home;