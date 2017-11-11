import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeProduct } from "../actions";
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, removeProduct }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onRemoveProductClicked={(productId) => removeProduct(productId)}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  {
    checkout, removeProduct
  }
)(CartContainer)
