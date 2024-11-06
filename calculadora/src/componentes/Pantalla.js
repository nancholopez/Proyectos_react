import React from "react";
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = ( { input } ) => (
    <div className='input'>
        {input}
    </div>
); /*Aquí se utiliza paréntesis porque se retorna directamente la estructura del componente, normalmente se usa para componentes sencillos, que sólo tienen una presentación, que no tienen una lógica o funciones*/

export default Pantalla;