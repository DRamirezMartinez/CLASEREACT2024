const Map2 = () =>{
    const productos = [
        {id:1, nombre:"Samsung Galaxy S23 Plus Dual SIM 512 GB green 8 GB RAM", descripcion: "Pantalla Dynamic AMOLED 2X de 6.6", stock:10, price:4999920, imagen:"https://http2.mlstatic.com/D_NQ_NP_712844-MLA69514168843_052023-O.webp"},
        {id:2, nombre:"Samsung Galaxy S23 Ultra Dual SIM 512 GB phantom black 12 GB RAM", descripcion: "Procesador Snapdragon 8 Gen 2 Octa-Core de 3GHz con 12GB de RAM.", stock:0, price:6999920, imagen:"https://http2.mlstatic.com/D_NQ_NP_961139-MLA70217776590_062023-O.webp"},
        {id:3, nombre:"Xiaomi Redmi Note 12 4G Dual SIM 128 GB gris ónix 4 GB RAM", descripcion: "Procesador Snapdragon 685 Octa-Core de 2.8GHz con 4GB de RAM.", stock:7, price:553804, imagen:"https://http2.mlstatic.com/D_NQ_NP_690943-MLA73349748874_122023-O.webp"}
    ];

    return (
        <div className="container my-5">
            <div className="row">
                {productos.map(producto => (
                    <div key={producto.id} className="col-md-4">
                         <div className="card text-center">
                    <img src={producto.imagen} className="img-fluid" alt={producto.nombre}/>
                    <div className="card-body">
                      <p className="card-text"> <b>{producto.nombre}</b></p>
                      <p className="card-text"> ${producto.price} </p>
                    </div>
                  </div>
                    </div>                   
                ))}
            </div>
        </div>
    )
}
export default Map2; 