import React from "react";
import '../hojas-de-estilo/Contador.css';

/*COMPONENTE DE CLASE*/
class Contador extends React.Component{
    render(){
        return(
            <div className="contador">
                {this.props.numClics}
            </div>
        );    
    }
}

/* COMPONENTE FUNCIONAL
function Contador({ numClics }){
    return(
        <div className="contador">
            {numClics}
        </div>
    );
}
*/
export default Contador;