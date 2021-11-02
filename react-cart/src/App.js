
import Navbar from './components/Navbar';
import Index from './components/Index';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartitems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartitems(cartItems.map(x => 
        x.id === product.id ? {...exist, qty: exist.qty +1} : x
        ))
    } else{
      setCartitems([...cartItems, { ...product, qty: 1}])
    }
  }
  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartitems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='row'>
        <Index onAdd={onAdd} products={ products } />
        <Cart onAdd={onAdd} onRemove= {onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
