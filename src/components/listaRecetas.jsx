import React, {useContext} from 'react'
import {RecetasContext} from '../context/RecetasContext'
import Recetas from './Recetas';

const ListaRecetas = () => {

    //extraer las recetas del Context de Recetas
    const {recetas} = useContext(RecetasContext)

    return ( 

    <div className="row mt-5">
        {recetas.map(receta => (
            <Recetas
                key={receta.idDrink}
                receta={receta}
            />
        ))}
    </div>
    
    );
}
 
export default ListaRecetas;