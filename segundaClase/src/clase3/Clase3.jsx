/* //en este ejemplo estamos combinando dos lenguajes html y js */
const Clase3 = () => {
    //forma 2 de transpiling
    //declaramos una funcion y en esta creamos un objeto que contiene todas las propiedades a utilizar    
    //llamamos a cada propiedad con el . y el nombre qque usamos para declarar la variable en este ejemplo producto 
    let producto = {id:1, imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", tittulo: "Doble Cuarto de Libra con Queso", calorias: 771, descripcion:"Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza." };

    // forma 1 de transpiling
    //declaramos funciones separadas por cada atributo y luego las llamamos en return por el nombre de variable declarado    
    /* let imagen = "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar";
    let tittulo = "Doble Cuarto de Libra con Queso" 
    let calorias = 771;
    let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza." */

    //forma 2 de transpiling
    
    return (              
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-end">
                    <img src={producto.imagen} alt="Producto1" />
                </div>
                <div className="col-md-6 py-5">
                    <h1 className="text-warning">{producto.tittulo}</h1>
                    <h5>{producto.calorias + " " + "kcal"}</h5> {/* //como son funciones de js podemos hacer operaciones y llamado de elementos js */}
                    <p>{producto.descripcion.toUpperCase()}</p> {/* toUpperCase() cambia el texto a mayusculas */}
                </div>
            </div>
        </div>
    )
}
export default Clase3;