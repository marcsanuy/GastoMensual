import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';


function App() {

  //state del presupuesto
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [ crearGasto, guardarCrearGasto ] = useState(false);
  const [ gasto, guardarGasto ]= useState({});
  const [ gastos, guardarGastos ] = useState([]);



  useEffect(() =>{
   if(crearGasto) {
    const listadoGastos = [...gastos, gasto];
    guardarGastos(listadoGastos);

    //Una vez agregado, lo ponemos como false
    guardarCrearGasto(false);
   }
  }, [crearGasto]);



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
                        guardarCrearGasto={guardarCrearGasto}
                      />
                    </div>

                    <div className="one-half column">
                      <Listado 
                        gastos={gastos}
                      />
                    </div>  
                </div>
              ) 
            }
          </div>
          
      </header>
      
    </div>
  );
}

export default App;
