import { connect } from 'react-redux';
import { compose } from 'redux';
import { MoviesFormAdd } from '../page';
import { withRouter } from 'react-router-dom';
import { createMovie, downloadMoviesFile } from '../bll/movies/thunk';

const mapStateToProps = state => ({
    fetching: state.ui.fetching,
    error: state.ui.error,
});

const mapDispatchToProps = {
    createMovie: (data) => createMovie(data),
    downloadMoviesFile: (file) => downloadMoviesFile(file),
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(MoviesFormAdd);
