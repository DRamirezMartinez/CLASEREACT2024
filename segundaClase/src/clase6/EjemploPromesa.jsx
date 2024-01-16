const EjemploPromesa = () =>{
    const productos = [
        {id:1, nombre:"Samsung Galaxy S23 Plus Dual SIM 512 GB green 8 GB RAM", descripcion: "Pantalla Dynamic AMOLED 2X de 6.6", stock:10, price:4999920},
        {id:2, nombre:"Samsung Galaxy S23 Ultra Dual SIM 512 GB phantom black 12 GB RAM", descripcion: "Procesador Snapdragon 8 Gen 2 Octa-Core de 3GHz con 12GB de RAM.", stock:0, price:6999920},
        {id:3, nombre:"Xiaomi Redmi Note 12 4G Dual SIM 128 GB gris ónix 4 GB RAM", descripcion: "Procesador Snapdragon 685 Octa-Core de 2.8GHz con 4GB de RAM.", stock:7, price:553804},
    ];

    const promesa = new Promise((resolve, reject) =>{
        console.log("Iniciando promesa...")
        setTimeout(() =>{
           const productosSalida = productos.filter(item => item.stock >20);
           if(productosSalida.length > 0){
            resolve(productosSalida); 
           }else {
            reject("No se encontraron Productos!")
           }
                
        }, 3000);
    })

    promesa.then(resultado =>{
        console.log(resultado);
    })
    .catch(error =>{
        console.log("Error: " + error);
    })

    return (
        <div></div>
    )
}
export default EjemploPromesa;