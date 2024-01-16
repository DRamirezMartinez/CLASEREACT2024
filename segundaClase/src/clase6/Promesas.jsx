const Promesas = () => {

/*     const promesa = new Promise((resolve, reject) => { //Funcion que recibe una funcion y devuelve un valor
        
        let tePortasteMal = false;

        if(tePortasteMal){

            resolve("Seras Castigado");
        }else {
            reject("Te portaste bien")
        }         
    });

    promesa.then(resultado => {
        console.log(resultado);
    }).catch (resultado => {
        console.log("Motivo de Rechazo: " + resultado);
    }) */

    const productos = [
        {id:1, nombre: "Coca Cola", precio:1500 },
        {id:2, nombre: "Colombiana", precio:950 },
        {id:3, nombre: "Uva Postobon", precio:1200 }
    ];
    const mostrarResultados = true;
    const promesa = new Promise ((resolve, reject) =>{
        mostrarResultados ? resolve (productos) : reject("No se encontraron Productos!")
    });
    promesa.then(data => {
        console.log(data);
    })
    .catch(motivo =>{
        console.log("Error: " + motivo);
    }).finally(() =>{
        console.log("Fin de ejecucion de mi promesa")
    })  
    // console.log(promesa);
    
   



    return (
        <h1>Promesas</h1>
    )
}
export default Promesas;