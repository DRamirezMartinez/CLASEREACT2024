import { Link, NavLink } from "react-router-dom";

const Titulo9 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Link to= {"/"}> 
                        <img src= "https://ams3.digitaloceanspaces.com/graffica/2022/12/unnamed-512x375.png" width={180} alt= {"McDonalds"}/> 
                    </Link>       
                    <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/"}>Pagina Principal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Categoria/hamburguesas">Hamburguesas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Categoria/papas">Papas Fritas</NavLink>
                            </li>                             
                    </ul>
                </div>
            </div>
        </div>
       
       
       
    )
}
export default Titulo9;