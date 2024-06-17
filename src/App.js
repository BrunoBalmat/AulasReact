import './App.css';
import './App.css';


// Fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento, nome da mae e para 3 pessoas nome do pai
//Porem o titulo pai nao é exibido para quem não tem o nome do pai



function App() {
  const cadastro  = [
    {
      nome:"Abel",
      idade:"18",
      data_de_nascimento:"22/02/06",
      nome_da_mae:"Alura",
      tem_pai: true
    },
    {
      nome:"Bola",
      idade:"19",
      data_de_nascimento:"10/10/05",
      nome_da_mae:"Bela",
      tem_pai: true
    },
    {
      nome:"Carlos",
      idade:"24",
      data_de_nascimento:"06/05/00",
      nome_da_mae:"Carla",
      tem_pai:false
    },
    {
      nome:"Fernando",
      idade:"26",
      data_de_nascimento:"10/12/98",
      nome_da_mae:"Fernanda",
      tem_pai:false
    }
  ]

  const filtrando = cadastro.filter(item => {
    return(item.tem_pai === false)
     
  })


  const feira =[
    {
      pessoa:"Bruno",
      trouxe:"abacaxi",
      levou:"melancia"
    },    
    {
      pessoa:"Vitao",
      trouxe:"abacaxi",
      levou:"caqui"
    },    
    {
      pessoa:"beto",
      trouxe:"melao",
      levou:"banana"
    }    
  ]

  const filtrandofeira = feira.filter(item => {
    return (item.trouxe !== "abacaxi")
  })
  
  


  return (
    <div className="App">
      {
        filtrando?.map(item => {
          return (
            <div className='cadastro' >
              <div>Nome: {item.nome}</div>
              <div>Idade: {item.idade}</div>
              <div>Data de nascimento: {item.data_de_nascimento}</div>
              <div>Nome da mãe: {item.nome_da_mae}</div>
              {/* <div>Nome do pai:{item.nome_do_pai}</ div>               */}
            </div>
          )
        })
      }
      {
      //  cadastro?.map(item => {
      //   return (
      //     <div className='cadastro'>
      //       <div>Nome: {item.nome}</div>
      //       <div>Idade: {item.idade}</div>
      //       <div>Data de nascimento: {item.data_de_nascimento}</div>
      //       <div>Nome da mãe: {item.nome_da_mae}</div>
      //       {item.nome_do_pai && }
      //       <div>Nome do pai: {item.nome_do_pai? item.nome_do_pai : 'não tive pai'}</div>
      //     </div>
      //   )
      // })
      }
      {filtrandofeira?.map(item => {
        return (
          <div className='cadastro'>trouxe abacaxi: {item.pessoa}</div>
        )
      })
      }

    </div>
  );

}

export default App;
