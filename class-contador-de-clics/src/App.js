import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React/*, { useState }*/ from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClics: 0
    }

    this.manejarClic = this.manejarClic.bind(this);//bind permite asociar el significado actual de this del constructor con el significado this en los métodos
    this.reiniciarClic = this.reiniciarClic.bind(this);
  };

  manejarClic() {
    this.setState(({numClics}) => ({numClics: numClics + 1}));//Sintaxis de desustructuración en la que devolvemos la propiedad del objeto que queremos actualizar
  }
  
  reiniciarClic = () => {
    this.setState({numClics: 0});
  }

  render(){
    return(
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo freeCodeCamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador 
            numClics={this.state.numClics} />
          <Boton 
            texto= "Clic"
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton 
            texto= "Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarClic} />
        </div>
      </div>
    )
  }
}

// function App() {

//   const [numClics, setNumClics] = useState(0);

//   const manejarClic = () => {
//     setNumClics(numClics + 1);
//   }
  
//   const reiniciarClic = () => {
//     setNumClics(0);
//   }
  
//   return (
//     <div className="App">
//       <div className='freecodecamp-logo-contenedor'>
//         <img 
//           className='freecodecamp-logo'
//           src={freeCodeCampLogo}
//           alt='Logo freeCodeCamp' />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador 
//           numClics={numClics} />
//         <Boton 
//           texto= "Clic"
//           esBotonDeClic={true}
//           manejarClic={manejarClic} />
//         <Boton 
//           texto= "Reiniciar"
//           esBotonDeClic={false}
//           manejarClic={reiniciarClic} />
//       </div>
//     </div>
//   );
// }

export default App;
