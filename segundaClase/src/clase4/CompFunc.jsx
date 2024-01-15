import { useState } from "react";
import Item from "./Item";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";

const CompFunc = () =>{
    const [texto, setTexto] = useState ("Mi Primer Texto"); //mi useState llamada Texto
    const [otroTexto, setOtroTexto] = useState("");

    const modificarTexto = () => {
            setTexto("Texto Modificado por un CLICK");
            setOtroTexto("Datos enviados!");
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Titulo titulo={"Coderhouse"} />
                    <Parrafo parrafo={"Curso de React Js"} />
                    <p>{texto}</p>                    
                    <div className= {otroTexto ?  "alert alert-success" : ""} role="alert">{otroTexto}</div>
                    <p><button onClick={modificarTexto} className= "btn btn-primary">Modificar Texto</button></p>
                   <p>desayunos:</p>
                   <ul>
                    <Item valor="Cafe" />
                    <Item valor="Te" />
                    <Item valor="Gaaseosa" />
                    <Item valor="Pan" />
                   </ul>
                </div>
            </div>
        </div>
    )
}
export default CompFunc;