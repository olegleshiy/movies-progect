import { connect } from 'react-redux';
import { compose } from 'redux';
import { Movies } from '../page';
import { getMovies, getMovieOne, deleteMovie } from '../bll/movies/thunk';
import { actions } from '../bll/movies/actions';

const mapStateToProps = state => ({
    fetching: state.ui.fetching,
    movies: state.moviesPage.movies,
    movieItem: state.moviesPage.movieItem,
    error: state.ui.error,
});

const mapDispatchToProps = {
    getMovies: () => getMovies(),
    getMovieOne: (hash) => getMovieOne(hash),
    deleteMovie: (hash) => deleteMovie(hash),
    showMovieItem: (hash) => actions.showMovieItemAC(hash),
    hideMovieItem: () => actions.hideMovieItemAC(),
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Movies);
