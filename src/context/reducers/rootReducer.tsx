import { combineReducers } from "redux";
import { startReducer } from './startReducer';
import { homeReducer } from './homeReducer';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { menuReducer } from './menuReducer';
import { searchReducer } from './searchReducer';
import { cartReducer } from './cartReducer';
import { bannerReducer } from './bannerReducer';

export const rootReducer = combineReducers({
  Start: startReducer,
  Home: homeReducer,
  Banner: bannerReducer,
  Category: categoryReducer,
  Product: productReducer,

  Menu: menuReducer,
  Search: searchReducer,
  Cart: cartReducer,
});
