import './App.css';

// onClick
// onChange

function App() {

  return (
    <div className="App">
      <label>calcular soma mais 4: </label>
      <input onChange={(e) => {alert((4 + Number(e.target.value)))}} />
      <div onClick={()=> {alert ('Você conseguiu')} }>
        <h1>Div onclick</h1>
      </div>
    </div>
  );
}

export default App;
