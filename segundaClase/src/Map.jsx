const Map = () => {

    const usuarios = [
       {dni:12345678, nombre:"Laura", edad:37, dineroMp:50000},
       {dni:12345677, nombre:"Juan Diego", edad:3, dineroMp:100000}, 
       {dni:12345666, nombre:"Diego", edad:39, dineroMp:200000}
    ];
    // console.log(usuarios);
    // console.log(usuarios.map(pepe => (pepe.dineroMp * 1.2))); //.map crea un nuevo array
    // console.log(usuarios.map(item => ({nombreUsuario:item.nombre.toUpperCase(), edadUsuario:item.edad})));

    return (
        <div>
           <h1>Map</h1>
           <ul>
                {usuarios.map(item => (
                   <li key={item.dni}>Nombre: <b>{item.nombre}</b> - Edad: <b>{item.edad}</b>  </li>
                ))}   
           </ul>
        </div>
        
    )
}
export default Map;