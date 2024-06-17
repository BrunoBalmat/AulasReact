import './App.css';


// Fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento, nome da mae e para 3 pessoas nome do pai
//Porem o titulo pai nao é exibido para quem não tem o nome do pai



function App() {
  const cadastro = [
    {
      nome:"Abel",
      idade:"18",
      data_de_nascimento:"22/02/06",
      nome_da_mae:"Alura",
      nome_do_pai:"Aladin"
    },
    {
      nome:"Bola",
      idade:"19",
      data_de_nascimento:"10/10/05",
      nome_da_mae:"Bela",
      nome_do_pai:"Beto"
    },
    {
      nome:"Carlos",
      idade:"24",
      data_de_nascimento:"06/05/00",
      nome_da_mae:"Carla",
      nome_do_pai:"Cartos"
    },
    {
      nome:"Diego",
      idade:"23",
      data_de_nascimento:"10/10/01",
      nome_da_mae:"Dalva",
      nome_do_pai:""
    },
    {
      nome:"Fernando",
      idade:"26",
      data_de_nascimento:"10/12/98",
      nome_da_mae:"Fernanda",
      nome_do_pai:""
    }
  ]
  return (
    <div className="App">
      {
       cadastro?.map(item => {
        return (
          <div className='cadastro'>
            <div>Nome: {item.nome}</div>
            <div>Idade: {item.idade}</div>
            <div>Data de nascimento: {item.data_de_nascimento}</div>
            <div>Nome da mãe: {item.nome_da_mae}</div>
            {item.nome_do_pai && <div>Nome do pai:{item.nome_do_pai}</div>}
            {/* <div>Nome do pai: {item.nome_do_pai? item.nome_do_pai : 'não tive pai'}</div> */}
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
