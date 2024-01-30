
import { useEffect, useState } from "react";

const Eventos = () => {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState (""); 
    const [textoMascara, setTextoMascara] = useState("");   

    function saludar(evento) {        
        setContador (contador+1);
        console.log(evento.nativeEvent);
        evento.preventDefault();
    }

    function mostrarTexto (e){
        console.log(e.nativeEvent);
        setTexto("Escribiste el texto: " + e.target.value);
    }

    function resize () {
        console.log("Hiciste un resize de tu pagina")
    }

    window.addEventListener("resize", resize);

    //Funcion desafio de clase
    function mascaraInput(event) {
        let letra = event.nativeEvent.key;

        if (letra != "a" && letra != "e" && letra != "i" && letra !="o" && letra !="u"){
            setTextoMascara(textoMascara + letra);  
        } 
        console.log(letra);       
    }

    //quitar eventlistener despues de cargar el componente

   useEffect(()=> {
    return () => {
        //console.log("quitamos el evento listener del resize");
        window.removeEventListener("resize", resize);
        return true;
        
    };       

   })

    return (
       <div className="container">
        <div className="row">
            <div className="col">
                <form action="">
                    <h1>Eventos</h1>
                    <button className="btn btn-primary" onClick={(evento) => {saludar(evento)}}>Aceptar</button>
                    <p>contador: {contador} </p>
                    <input type="text" onKeyUp={(e) =>{mostrarTexto(e)}}/>
                    <p> {texto} </p>
                    <h2>Desafio</h2>
                    <input type="text" className="form-control" onKeyDown={(event)=> {mascaraInput(event)}}/>
                    <p> {textoMascara} </p>
                </form>
                
            </div>
        </div>
       </div>
    )
}
export default Eventos