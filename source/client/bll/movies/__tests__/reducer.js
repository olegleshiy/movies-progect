//Reducer
import { moviesReducer } from '../reducer';

//Actions
import { actions } from '../actions';

const initialState = {
    movies: [],
    movieItem: null,
};

describe('movies reducer:', () => {
    test('should return initial state by default', () => {
        expect(moviesReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle SET_MOVIES', () => {
        expect(moviesReducer(void 0, actions.setMoviesAC(__.movies)))
            .toEqual({ ...initialState, movies: __.movies });
    });

    test('should handle SET_MOVIE_ITEM', () => {
        expect(moviesReducer(void 0, actions.setMovieItemAC(__.movie)))
            .toEqual({ ...initialState, movies: [ ...initialState.movies, __.movie ] });
    });

    test('should handle DELETE_MOVIE_ITEM', () => {
        expect(moviesReducer(void 0, actions.deleteMovieItemAC(__.hash)))
            .toEqual({ ...initialState, movies: initialState.movies.filter((el) => el.hash !== __.hash) });
    });

    test('should handle SHOW_MOVIE_ITEM', () => {
        expect(moviesReducer(void 0, actions.showMovieItemAC(__.hash)))
            .toEqual({ ...initialState, movieItem: initialState.movies.find((el) => el.hash === __.hash) });
    });

    test('should handle HIDE_MOVIE_ITEM', () => {
        expect(moviesReducer(void 0, actions.hideMovieItemAC()))
            .toEqual({ ...initialState, movieItem: null });
    });
});
