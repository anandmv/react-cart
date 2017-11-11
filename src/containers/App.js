import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div className="row">
    <h2>Cart App</h2>
    <div className="row">
      <div className="col-12 col-md-8">
        <ProductsContainer />
      </div>
      <div className="col-6 col-md-4">
        <CartContainer />
      </div>
    </div>
  </div>
);

export default App
