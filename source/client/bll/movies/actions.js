//Types
import { types } from './types';

export const actions = {
    setMoviesAC: (payload) => {
        return {
            type: types.SET_MOVIES,
            payload,
        };
    },
    setMovieItemAC: (payload) => {
        return {
            type: types.SET_MOVIE_ITEM,
            payload,
        };
    },
    showMovieItemAC: (payload) => {
        return {
            type: types.SHOW_MOVIE_ITEM,
            payload,
        };
    },
    hideMovieItemAC: () => {
        return {
            type: types.HIDE_MOVIE_ITEM,
        };
    },
    deleteMovieItemAC: (payload) => {
        return {
            type: types.DELETE_MOVIE_ITEM,
            payload,
        };
    },
};
