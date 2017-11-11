import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, changeQuanityCart } from "../actions";
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({
  products,
  addToCart,
  changeQuanityCart
}) => (
  <ProductsList title="Products">
    {products.map((product, key) => (
      <div
        className="col-6 col-lg-4"
        style={{
          padding: 10
        }}
        key={key}
      >
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
          onChangeQuanitytClicked={() => changeQuanityCart(product.id)}
        />
      </div>
    ))}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  changeQuanityCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  {
    addToCart, changeQuanityCart
  }
)(ProductsContainer)
