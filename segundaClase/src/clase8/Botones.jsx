/* eslint-disable react/prop-types */
import UseCount from "./UseCount";
const Caja = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>{props.titulo}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                   {props.children}
                </div>
            </div>
        </div>
    )
}

const Botones = () => {
    
    const {counter, reset, increment, decrement} = UseCount(1, 0, 10);

    return (

        <>
            <div className="container my-5 text-center">
                <div className="row">
                    <div className="col">
                        <h1>Botones</h1>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                            <button type="button" className="btn btn-primary"> {counter} </button>
                            <button type="button" className="btn btn-primary" onClick={increment}>+</button>
                            <button type="button" className="btn btn-primary" onClick={reset}>Reiniciar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Caja  titulo= {"Curso de JavaScript"}>
                <p>Este es un contenido de prueba #1 </p>
                <button className="btn btn-warning">Aceptar</button>
            </Caja>
            <Caja  titulo= {"Curso de React Js"}>
                <p>Este es un contenido de prueba #2 </p>
                <p>Este es un contenido de prueba #2 </p>
                <button className="btn btn-danger">Aceptar</button>
            </Caja>
            
        </>
    )
    
}

export default Botones;