import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="text-center">
    <img src={product.image} class="img-thumbnail" />
    <Product
      name={product.name}
      brand={product.brand}
      details={product.details}
      currency={product.currency}
      price={product.price}
      inventory={product.inventory}
    />
    <button
      className="btn btn-primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
