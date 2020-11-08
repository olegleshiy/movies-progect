//Actions
import { actions } from '../actions';

//Types
import { types } from '../types';

describe('movies actions:', () => {
    test('setMoviesAC', () => {
        expect(actions.setMoviesAC(__.movies)).toEqual({
            type: types.SET_MOVIES,
            payload: __.movies
        });
    });

    test('setMovieItemAC', () => {
        expect(actions.setMovieItemAC(__.movie)).toEqual({
            type: types.SET_MOVIE_ITEM,
            payload: __.movie
        });
    });

    test('showMovieItemAC', () => {
        expect(actions.showMovieItemAC(__.movieHash)).toEqual({
            type: types.SHOW_MOVIE_ITEM,
            payload: __.movieHash
        });
    });

    test('hideMovieItemAC', () => {
        expect(actions.hideMovieItemAC()).toEqual({
            type: types.HIDE_MOVIE_ITEM,
        });
    });

    test('deleteMovieItemAC', () => {
        expect(actions.deleteMovieItemAC(__.movieHash)).toEqual({
            type: types.DELETE_MOVIE_ITEM,
            payload: __.movieHash
        });
    });
});
