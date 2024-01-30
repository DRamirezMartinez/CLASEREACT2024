//import Botones from "./clase8/Botones";
//import HOC from "./clase8/HOC";
//import RenderProps from "./clase8/RenderProps";
/* import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./clase9/ItemListContainer";
import Titulo9 from "./clase9/Titulo9";
import Contenido from "./clase9/Contenido";
import PieDePagina9 from "./clase9/PieDePgina9";
import Error404 from "./clase9/Error404"; estos del parentesis quitarlos con los de abajo para cargar la clase 9 */
import { useState } from "react";
import Eventos from "./clase10/Eventos";

function App() { 
  
  const [visible, setVisible] = useState (true);

  function ocultarComponente() {
    setVisible(false);
  }
  return (
    // <BrowserRouter>
    //   <Titulo9 />      
    //   <Routes>
    //     <Route path="/" element = { <ItemListContainer/> } />
    //     <Route path="productos/" element = { <ItemListContainer/> } />
    //     <Route path="/Categoria/:id" element = { <ItemListContainer/> } />
    //     <Route path="Contenido/" element = { <Contenido/> } />
    //     <Route path="*" element = { <Error404/> } />
    //   </Routes>
    //   <PieDePagina9/>
    // </BrowserRouter>
    <>
      {visible ? <Eventos/> : ""}
      <p><button className="btn btn-secondary" onClick={ocultarComponente}>Ocultar Componente</button></p>
    </>
    
    
  )
}

export default App;
