import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {

    const { guardargasto, guardarCrearGasto } = props;

    //state
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Al agregar Gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if( cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto === '' ) {
            guardarError(true);
            return;
        }

        
        //contruir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //pasar gasto al componete principal
        guardargasto(gasto);
        guardarCrearGasto(true);


        //elimninar alerta
        guardarError(false)

        //Refrescar form
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar Gastos</h2>

            {error ? <Error mensaje='Debes relenar ambos campos' /> : null}

            <div className="campo">
                <label>Concepto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Recibo de la Luz"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />    
            </div>
            <div className="campo">
                <label>Importe</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    onChange={e => guardarCantidadGasto( parseInt(e.target.value, 10) )}
                    value={cantidadGasto}
                />    
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Importe" />

        </form>
    )
}
export default Formulario;