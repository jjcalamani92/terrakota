import { types } from "../types/types";

const initialState = {
    menu: false,
}

export const menuReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.openMenu:
            return {
                ...state,
                menu: true
            }
        case types.closeMenu:
            return {
                ...state,
                menu: false
            }
        default:
            return state;
    }
}