import { useEffect, useState } from "react";

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
               <div className="col text-center">
                    <h1>Fake Store API</h1>
               </div>
            </div> 

            <div className="row">
                {productos.map(produc =>(
                    <div key={produc.id} className="col-md-3 ">
                        <div className="card">
                            <img src= {produc.image} className="img-fluid" alt={produc.title}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title {produc.title} </h5>
                                <p className="card-text"> ${produc.price} </p>                                
                            </div>
                        </div>
                        </div>                        
                        ))}
                   
            </div>                                
        </div>
       
    )
} 
export default CompFetch;