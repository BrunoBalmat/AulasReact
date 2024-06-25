import React from 'react';
import Boasvindas from './boasvindas';
import Home from './home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/boasvindas" element={<Boasvindas/>} />
      </Routes>
    </Router>
  );
}
export default App;


