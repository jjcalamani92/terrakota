import { types } from "../types/types";

const initialState = {
    search: false,
}

export const searchReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.openSearch:
            return {
                ...state,
                search: true
            }
        case types.closeSearch:
            return {
                ...state,
                search: false
            }
        default:
            return state;
    }
}