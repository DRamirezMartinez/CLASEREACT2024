/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CompProductos = () => {
    const {productos, totalProductos} = useContext(CartContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Productos</h1>
                    <ul>
                        {productos.map(item =>(
                            <li key={item.id}> {item.nombre} </li>
                        ))}
                    </ul>
                    <p> Total productos: {totalProductos()} </p>
                </div>
            </div>
        </div>
        
    )
}
export default CompProductos;