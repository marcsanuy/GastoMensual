import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    // definir el state
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError ] = useState(false); 

    //validaqr el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        //validación pasada
        guardarError(false);
        guardarPresupuesto ( cantidad );
        guardarRestante ( cantidad);
        guardarPreguntaPresupuesto(false);

    }

    return(
        <Fragment>
           <h2>Inserta tu Presupuesto</h2>

            {error ? <Error mensaje='Se debe añadir un Presupuesto' /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                className="u-full-width"
                placeholder="Agregar Presupuesto"
                 onChange={e => guardarCantidad( parseInt  (e.target.value, 10) ) }
                />
                <input type="submit" className="button-primary u-full-width" value="Agregar"/>
            </form>
        </Fragment>
    );
    
}
export default Pregunta;