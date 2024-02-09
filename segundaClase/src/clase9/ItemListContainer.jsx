/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json";
import { useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

const ItemListContainer = () => {
    const  [productos, setProductos] = useState ([]);
    const {id} = useParams();

    useEffect (() =>{
        const promesa = new Promise((resolve) => {
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
        })
        promesa.then(data =>{
            setProductos(data)
        })
    }, [id]);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <BreadCrumb page= {id} />
                </div>
            </div>
            <div className="row">
                {productos.map(item =>(
                    <div className="col-md-3 my-2">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>                               
                            </div>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}
export default ItemListContainer;