import * as constants from '../constants/Constants';

const data = JSON.parse(localStorage.getItem('CART'));
const initialState = data ? data : [];

const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_PRODUCT_TO_CART:
            let product = action.product;
            let indexOfAddProduct;
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i].id) {
                    indexOfAddProduct = i;
                }
            }
            if (indexOfAddProduct === undefined) {
                product.quantity = 1;
                state.push(product);
            } else {
                state[indexOfAddProduct].quantity += 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case constants.CHANGE_QUANTITY:
            let index;
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i].id) {
                    index = i;
                }
            }
            state[index].quantity += action.number;
            if (state[index].quantity <= 0 ) {
                state[index].quantity = 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case constants.REMOVE_PRODUCT:
            let indexOfProductRemove;
            for (let i = 0; i < state.length; i++) {
                if (action.product.id === state[i].id) {
                    indexOfProductRemove = i;
                }
            }
            state.splice(indexOfProductRemove, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default:
            return [...state];
    }
}

export default appReducers;