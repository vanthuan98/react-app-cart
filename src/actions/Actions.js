import * as constants from '../constants/Constants';

export const showProducts = (products) => {
    return {
        type: constants.SHOW_PRODUCTS,
        products, 
    }
}

export const addProductToCart = (product) => {
    return {
        type: constants.ADD_PRODUCT_TO_CART,
        product,
    }
}

export const changeQuantity = (product, number) => {
    return {
        type: constants.CHANGE_QUANTITY,
        product,
        number,
    }
}

export const removeProduct = (product) => {
    return {
        type: constants.REMOVE_PRODUCT,
        product,
    }
}

export const setShippingCost = (cost) => {
    return {
        type: constants.SET_SHIPPING_COST,
        cost,
    }
    
}