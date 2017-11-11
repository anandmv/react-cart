import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ inventory, name, brand, price, currency, details }) => (
  <div>
    <p>{brand}</p>
    <h4>{name}</h4>
    <p>{details}</p>
    <p>
      <b>{currency} {price}</b>
      {inventory ? `  (Stock Left : ${inventory})` : null}
    </p>
  </div>
);

Product.propTypes = {
  inventory: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
}

export default Product
