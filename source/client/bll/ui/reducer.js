//Types
import { types } from './types';

const initialState = {
    fetching: false,
    error: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCHING_START:
            return {
                ...state,
                fetching: true,
            };
        case types.FETCHING_STOP:
            return {
                ...state,
                fetching: false,
            };
        case types.EMIT_ERROR:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};
