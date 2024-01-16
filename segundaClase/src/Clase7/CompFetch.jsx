import { useState } from "react";

const CompFetch = () =>{

    const [productos, setProductos] = useState ([]);

    fetch("https://fakestoreapi.com/products/")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
    });
    return (
        <div className="container">
            <div className="row">
               <div className="col">
               <h1>Fetch</h1>
        <ul>
            {productos.map(produc =>(
                <li> {produc.title} - ${produc.price} ({produc.category}) </li>
            ))}
        </ul> 
               </div> 
            </div>
      
        </div>
       
    )
} 
export default CompFetch;