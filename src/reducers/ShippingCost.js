import * as constants from '../constants/Constants';

const initialState = 0;

const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_SHIPPING_COST:
            state = action.cost;
            return state;
        default:
            return state;
    }
}

export default appReducers;