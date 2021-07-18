import { combineReducers } from 'redux';
import Products from './Products';
import Cart from './Cart';
import shippingCost from './ShippingCost';

const appReducers = combineReducers({
    Products,
    Cart,
    shippingCost,
});

export default appReducers;