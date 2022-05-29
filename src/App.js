import './App.css';
import Boton from '../src/componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <h1>
          Contador de clicks
        </h1>
      </div>
      <div className="contenedor-contador">
        <Contador numClicks = {numClicks}
        
        />
        <Boton 
          texto="Click!"
          botonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto="Reset"
          botonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
