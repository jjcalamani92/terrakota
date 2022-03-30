import { types } from "../types/types";

const initialState = {
    cart: false,
}

export const cartReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.openCart:
            return {
                ...state,
                cart: true
            }
        case types.closeCart:
            return {
                ...state,
                cart: false
            }
        default:
            return state;
    }
}