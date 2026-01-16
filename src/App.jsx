// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}> 
      <div className='app'>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
