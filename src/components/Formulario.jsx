import React, {useContext, useState} from 'react'
import ListaRecetas from './listaRecetas';
import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {


    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })

   const {categorias} = useContext(CategoriasContext)
   const { buscarRecetas,guardarConsultar } = useContext(RecetasContext)
  
   //funcion para leer los contenidos

   const obtenerDatosReceta = e => {

    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
   }    

    return ( 
        
        <form
            className="col-12"
            onSubmit={ e =>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categorias o Ingrediente</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4 mt-5 ">
                    <input 
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}/>
                </div>
                <div className="col-md-4 mt-5">
                    <select 
                        name="categoria" 
                        id=""
                        className="form-control"
                        onChange={obtenerDatosReceta}>
                            <option value="">-- Selecciona Categoria --</option>
                            {
                                categorias.map(categoria => (
                                    <option
                                        key={categoria.strCategory}
                                        value={categoria.strCategory}>
                                            {categoria.strCategory}
                                        </option>
                                ))
                            }
                    </select>
                </div>

                <div className="col-md-4 mt-5">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"/>
                </div>
            </div>
            <div className="row">
            <ListaRecetas/>
        </div>
        </form>
        
        

    );
}
 
export default Formulario;