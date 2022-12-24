import * as actionTypes from '../../constants/constantData';
const initialState = {
  productslist: [],
  singleProduct: [],
};
export const newUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_REGISTER_DATA:
      return [payload, ...state];
    case actionTypes.GET_DATA:
      return { ...state, productslist: payload };
    case actionTypes.PRODUCT_DATA:
      return { ...state, singleProduct: payload };
    default:
      return state;
  }
};
export default newUser;
