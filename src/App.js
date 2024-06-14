import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {

  const instagram = 0

  return (
    <div className="App">
      <Header texto={<h2>Header</h2>}/>
      <Section1 texto={<h2>Primeiro paragrafo</h2>}/>
      <Section2 texto={<h2>Segundo paragrafo</h2>}/>
      <Footer instagram={instagram} texto={<h2>Footer</h2>}/>
    </div>
  );
}
export default App;
