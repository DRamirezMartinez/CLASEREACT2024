<<<<<<< HEAD

//import CompContenedor from "./clase4/CompContenedor";
//import CompFunc from "./clase4/CompFunc";

// import EjemploPromesa from "./clase6/EjemploPromesa";
// import Map from "./Map";
import Contexto from "./Clase11/contexto";

// import Map2 from "./Map2";
// import Promesas from "./clase6/Promesas";
=======
//import Botones from "./clase8/Botones";
//import HOC from "./clase8/HOC";
//import RenderProps from "./clase8/RenderProps";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./clase9/ItemListContainer";
import Titulo9 from "./clase9/Titulo9";
import Contenido from "./clase9/Contenido";
import PieDePagina9 from "./clase9/PieDePgina9";
import Error404 from "./clase9/Error404";
>>>>>>> db08427543c8b0dc77733a5a3470552bc389553e

function App() {  
  return (
<<<<<<< HEAD
    <>
    <Contexto />
    </>
=======
    <BrowserRouter>
      <Titulo9 />      
      <Routes>
        <Route path="/" element = { <ItemListContainer/> } />
        <Route path="productos/" element = { <ItemListContainer/> } />
        <Route path="/Categoria/:id" element = { <ItemListContainer/> } />
        <Route path="Contenido/" element = { <Contenido/> } />
        <Route path="*" element = { <Error404/> } />
      </Routes>
      <PieDePagina9/>
    </BrowserRouter>
    
    
>>>>>>> db08427543c8b0dc77733a5a3470552bc389553e
  )
}

export default App;
