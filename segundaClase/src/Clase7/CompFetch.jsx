import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const CompFetch = () =>{

    const [productos, setProductos] = useState ([]);


   useEffect(() => { 
    fetch("https://fakestoreapi.com/products/")
    .then(respuesta => respuesta.json())
    .then(datos => {
        setProductos(datos);
    });

    })
    return (
        <div className="container">
            <div className="row"> 
               <div className="col text-center my-5">
                    <h1>Fake Store API</h1>
               </div>
            </div> 

            <div className="row">                
                <ItemList productos={productos} />   
            </div>                                
        </div>
       
    )
} 
export default CompFetch;