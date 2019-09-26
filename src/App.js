import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

  //state del presupuesto
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [ gasto, guardarGasto ]= useState({});
  const [ gastos, guardarGastos ] = useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Mensual</h1>

          <div className="contenido-principal contenido">
            { (preguntaPresupuesto)
              ?
              <Pregunta 
             guardarPresupuesto={guardarPresupuesto}
             guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
             />
            : (
                <div className="row">
                    <div className="one-half column">
                      <Formulario
                        guardargasto={guardarGasto}
                      />
                    </div>

                    <div className="one-half column"></div>

                </div>
              ) 
            }
          </div>
          
      </header>
      
    </div>
  );
}

export default App;
