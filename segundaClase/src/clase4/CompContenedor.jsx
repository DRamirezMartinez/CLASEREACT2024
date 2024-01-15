import { useState } from "react";
import Boton from "./boton";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";

const CompContenedor = () =>{

    const [curso, setCurso] = useState ("Curso de JavaScript");

    function modificarCurso(){
        setCurso("Curso de React JS!");
    }

    return (
        <>
        <Titulo titulo={"Coderhouse"}/>
        <Parrafo parrafo={curso} />
        <Boton accion={modificarCurso} />
        </>
    )
}
export default CompContenedor;