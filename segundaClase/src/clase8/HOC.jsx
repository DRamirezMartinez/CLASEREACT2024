/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Comp2 = ({prop1, prop2}) => {
    return (
        <>
        <h2> {prop1 ? "Soy un Componente" : ""} </h2>
        <button className="btn btn-secondary" onClick={prop2}>Visible / No visible</button>
        </>
    )   
}

const HOC = () => {   
    const [visible, setVisible] = useState(true);

    const hacerVisible = () => {
        setVisible(false);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center my-3">
                <Comp2 prop1={visible} prop2={hacerVisible} />
                </div>
            </div>
        </div>
       
    )
}
export default HOC; 

