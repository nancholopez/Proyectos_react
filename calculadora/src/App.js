import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Loguito from './componentes/Loguito';
import { useState } from 'react'; //Utilizando Hooks
import { evaluate } from 'mathjs';
import BotonClear from './componentes/Botonclear'
import { contadorBoton } from './componentes/Botonprueba';


function App() {    
  const [input, setInput] = useState('');  

  const agregarInput = val =>{  
      contadorBoton(1);        
      setInput(input + val);      
  };

  const borrarInput = () => {
    setInput('');    
  };

    const calcularInput = () => {       
    if (input) {            
      setInput(evaluate(input));  
    } else {
      console.log('No hay input');
    };    
  };

      
  return (
    <div className="App">      
      <Loguito />
      
      <div className='contenedor-calculadora'>
        <div className='pantalla'>
          <Pantalla
            input= {input} />
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularInput}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>          
          <BotonClear manejarClear={borrarInput}>CLEAR</BotonClear>
          {/*<BotonClear manejarClear={() => setInput('')}>CLEAR</BotonClear> Esta es otra forma más simple para reducir código*/}
        </div>
      </div>
    </div>
  );
}

export default App;
