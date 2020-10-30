// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function getMovies (signal) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.getAll(signal);
            const { data } = response;

            if (response.status !== 200) {
                throw new Error('Some error getMovies');
            }

            dispatch(actions.setMoviesAC(data.data));

        } catch (error) {
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
