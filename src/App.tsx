import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Resultados from './components/Resultados/Resultados';

import './styles/normalize.css';
import './styles/skeleton.css';

function App() {
  const [categoria, setCategoria] = useState('pizza');
  return (
    <>
      <Navbar
        setCategoria={setCategoria}
      />
      <div className="container">
        <Resultados
          categoria={categoria}
        />
      </div>
    </>
  );
}

export default App;
