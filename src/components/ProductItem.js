import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductItem = ({
  product,
  onAddToCartClicked,
  onChangeQuanitytClicked
}) => {
  const inCart = product.quantity === 0;
  const addToCartBtn = inCart ? <button className="btn btn-primary" onClick={onAddToCartClicked} disabled={product.inventory > 0 ? "" : "disabled"}>
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button> : <div className="btn-group">
      <button className="btn btn-primary" onClick={onChangeQuanitytClicked} disabled={product.inventory > 0 ? "" : "disabled"}>
        -
      </button>
      <button className="btn btn-secondary">
        {product.quantity} in Cart
      </button>
      <button className="btn btn-primary" onClick={onAddToCartClicked} disabled={product.inventory - product.quantity > 0 ? "" : "disabled"}>
        +
      </button>
    </div>;
  return <div className="text-center">
      <img src={product.image} className="img-thumbnail"/>
      <Product name={product.name} brand={product.brand} details={product.details} currency={product.currency} price={product.price} inventory={product.inventory - product.quantity} />
      {addToCartBtn}
    </div>;
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
    quantity:PropTypes.number
  }).isRequired,
  quantity:PropTypes.object,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
