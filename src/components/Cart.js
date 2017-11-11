import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
   
        products.map(product =>
          <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.currency}. {product.price*product.quantity} 
              <button type="button" className="close btn" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </td>
          </tr>
        )): (
        <tr><td>Please add some products to cart.</td></tr>
      )

  return <div className="text-center">
      <h3>Your Cart</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {nodes}
        </tbody>
      </table>
      <h4>Total: <b>Rs. {total}</b></h4>
      <button onClick={onCheckoutClicked} className="btn btn-primary" disabled={hasProducts ? "" : "disabled"}>
        Checkout
      </button>
    </div>;
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
