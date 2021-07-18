import * as constants from '../constants/Constants';
import shoes1 from '../images/shoes1.jpg';
import shoes2 from '../images/shoes2.jpg';
import shoes3 from '../images/shoes3.jpg';
import shoes4 from '../images/shoes4.jpg';

const initialState = [
    {
        id: 1,
        name: 'Cras pose psum default',
        image: shoes1,
        price: 450,
    },
    {
        id: 2,
        name: 'Cras pose psum default',
        image: shoes2,
        price: 400,
    },
    {
        id: 3,
        name: 'Cras pose psum default',
        image: shoes3,
        price: 550,
    },
    {
        id: 4,
        name: 'Cras pose psum default',
        image: shoes4,
        price: 599,
    },
];
const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.SHOW_PRODUCTS:
            return [...state];
        default:
            return [...state];
    }
}

export default appReducers;
