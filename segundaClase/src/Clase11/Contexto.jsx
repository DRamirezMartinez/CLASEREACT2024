/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

/* sin contexto
const Componente1 = ({modoOscuro}) => {
   return (
       <Componente2 modoOscuro = {modoOscuro}/>
   )
}

const Componente2 = ({modoOscuro}) => {
   return (
       <p>Modo Oscuro? <b> {modoOscuro} </b> </p>
   )
} */

//definimos un contexto
const ThemeContext = createContext(); //themecontext es para envolver todo el contexto que queremos

//con contexto

const Componente1 = () => {
   return (
       <Componente2/>
   )
}
const Componente2 = () => {
   const {modoOscuro, productos} = useContext(ThemeContext)

       return (
           <div className="container">
               <p>Modo Oscuro? <b> {modoOscuro} </b> </p>
               <ul>
                   {productos.map(item => (
                       <li key={item.id}> {item.nombre} ${item.precio} </li>
                   ))}
               </ul>
           </div>
           
       ) 
   }

const Contexto = () => {
   const [modoOscuro, setModoOscuro] = useState ('Sí');
   const productos = [
       {id:1, nombre:'Coca cola', precio:1200},
       {id:2, nombre:'Pepsi', precio:1100},
       {id:3, nombre:'Colmbiana', precio:1300}
   ]
   return (
       <div className="container m-5">
           <ThemeContext.Provider value={{modoOscuro, productos}}>
                <Componente1/> 
           </ThemeContext.Provider> 
       </div>
      
   )
}
export default Contexto;