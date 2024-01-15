// let nombre = "felipe";


//sugar sintax operador ternario en vez de usar if else
// alert((nombre == "Mauro") ? "Hola" + nombre : "Hola che")


//operador spread con objetos
// let producto1 = {id:1, nombre: "coca cola", precio:1300};
// let producto2 = producto1;
// let producto3 = {id:2, nombre: "peps cola", precio:1200};
// let producto4 = {...producto1, categoria: "Gaseosa"};
// producto4.id = 4;
// producto4.precio = 1500;
// producto4. nombre = "Colombiana"; 
// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);

//operador spread con arrays

// let nombres1 = ["Diego", "Mauro", "Natalia", "Gonza"]; 
// let nombres2 = nombres1;
// nombres2[1] = "Andres";
// console.log(nombres1);
// console.log(nombres2);
// let nombres3 = ["orlando", "vilma", "laura"];
// let nombres4 = nombres1.concat(nombres3);
// console.log(nombres4);
// let nombres5 = [...nombres1, "Maria"]; //crea un nuevo array con los elementos del Array nombres1
// let nombres6 = [...nombres1, ...nombres3]; //crea un nuevo array con los elementos del Array nombres1 y nommbres3
// console.log(nombres5);
// console.log(nombres6);

//Array de Objetos
// let productos = [
//     {id:1, nombre: "coca cola", precio:1500},
//     {id:2, nombre: "pepsi cola", precio:1100},
//     {id:3, nombre: "colombiana", precio:1400}
// ]

// console.log(productos);
// productos[0].precio = 2000; //esta ingresando a la posicion 0 es decir al producto coca cola y le cambia el precio
// let producto = productos.find(ncualquiera => ncualquiera.nombre == "colombiana"); //find busca un elemento y devuelve el elemento
// console.log(producto);
// producto.precio = 700; //una vez lo devuelve ya podria editar las propiedades del elemento
// console.log(productos);

//Metodo Polyfill de Find

let productos = [
    {id:1, nombre: "Coca cola", precio:1500},
    {id:2, nombre: "Pepsi", precio:1100},
    {id:3, nombre: "colombiana", precio:1400}
]
let producto = productos.find(ncualquiera => ncualquiera.nombre == "Pepsi");
console.log(producto);
let cambioPrecio = {...productos}
console.log(cambioPrecio );
producto.precio = 2000;

//manera tradicional que se usa en caso de incompatibilidad con el codigo
// function find(arreglo, valor) {
//     let resultado = undefined;

//     for (let i=0; i<arreglo.lenght; i++) {
//         if (arreglo[i].nombre == valor) {
//             resultado = arreglo[i];
//             break;
//         }
//     }
//     return resultado;
// }

// let producto = find(productos, "pepsi");
// console.log(producto);

