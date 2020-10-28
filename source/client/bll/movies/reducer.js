//Types
import { types } from './types';

const initialState = {
    movies: [],
    movieItem: null,
};

export const moviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case types.SET_MOVIE_ITEM:
            return {
                ...state,
                movies: [...state.movies, action.payload],
            };
        case types.DELETE_MOVIE_ITEM:
            return {
                ...state,
                movies: state.movies.filter((el) => el.hash !== action.payload),
            };
        case types.SHOW_MOVIE_ITEM:
            return {
                ...state,
                movieItem: state.movies.find((el) => el.hash === action.payload),
            };
        case types.HIDE_MOVIE_ITEM:
            return {
                ...state,
                movieItem: null,
            };
        default:
            return state;
    }
};
