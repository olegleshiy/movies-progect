// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';
import { Notification } from '../../../components/Notification';

export function createMovie (movie) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.create(movie);
            const { data } = response;

            if (response.status !== 201) {
                throw new Error('Some error createMovie');
            }

            dispatch(actions.setMovieItemAC(data.data));
            Notification('topRight', 'success', `Movie created success!`);

        } catch (error) {
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
