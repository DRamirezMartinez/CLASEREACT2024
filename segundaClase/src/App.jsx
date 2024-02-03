
import Contexto from "./Clase11/Contexto";
import CartContextProvider from "./context/CartContext";
import CompProductos from "./Clase11/CompProductos";


function App() { 
  

  return (
    <CartContextProvider>
        <Contexto/>
        <CompProductos/>
    </CartContextProvider>
      
   
    

  
    
  )
}

export default App;
