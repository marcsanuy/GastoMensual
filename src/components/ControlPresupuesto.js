import React, {Fragment} from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: {presupuesto} €
        </div>
        <div className="">
            Restante: {restante} €
        </div>
    </Fragment>
);

 
export default ControlPresupuesto;