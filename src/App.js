import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


//Context 
const {ShoppingCartContext} = createContext();
const {ProductContext} = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart({...cart, item})
	};

	return (
		<div className="App">
			<ShoppingCartContext.Provider value={{cart}}>
				<Navigation />
				<Route path="/cart">
				   <ShoppingCart />
		        </Route>
			</ShoppingCartContext.Provider>

			<ProductContext.Provider value={{products, addItem}}>
				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
