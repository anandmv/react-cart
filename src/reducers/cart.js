import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CHANGE_QUANTITY,
  REMOVE_PRODUCT
} from "../constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_PRODUCT:
      if (state.indexOf(action.productId) !== -1) {
        state.splice(state.indexOf(action.productId), 1);
        return state;
      }
      return state;
    default:
      return state;
  }
}

const quantityById = (internalState = initialState.quantityById, action) => {
  const { productId } = action;
  let state = internalState.quantityById;
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [productId]: (state[productId] || 0) + 1 };
    case REMOVE_PRODUCT:
      return { ...state, [productId]: 0 };
    case CHANGE_QUANTITY:
     if (state[productId] - 1 > 0) {
      return { ...state, [productId]: state[productId] - 1 };
     }else{
       internalState.quantityById[productId]=0;
       internalState.addedIds.splice(internalState.addedIds.indexOf(productId), 1);
       return internalState;
     }
    default:
      return state;
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0


export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state, action)
      }
  }
}

export default cart
