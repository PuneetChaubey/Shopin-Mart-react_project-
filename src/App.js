import './App.css';

import EcomerceApp from './components/EcomerceApp';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
    
     <CartProvider>
     <EcomerceApp/>
     </CartProvider>
    
     
    
     
    </div>
  );
}

export default App;
