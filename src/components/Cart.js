import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({
  products,
  total,
  onCheckoutClicked,
  onRemoveProductClicked
}) => {
  const hasProducts = products.length > 0;
  const productList = hasProducts ? (
    products.map((product,key) => (
      <tr key={key}>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>
          {product.currency}. {product.price * product.quantity}
          <button className="close btn" onClick={()=>{onRemoveProductClicked(product.id)}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td>Cart Empty.</td>
    </tr>
  );

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
        <tbody>{productList}</tbody>
      </table>
      <h4>
        Total: <b>Rs. {total}</b>
      </h4>
      <button onClick={onCheckoutClicked} className="btn btn-info" disabled={hasProducts ? "" : "disabled"}>
        Checkout
      </button>
    </div>;
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onRemoveProductClicked: PropTypes.func
}

export default Cart
