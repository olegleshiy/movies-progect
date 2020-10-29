// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';
import { Notification } from '../../../components/Notification';

export function deleteMovie (hash) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.remove(hash);
            const { data } = response;

            if (response.status !== 200) {
                throw new Error('Some error deleteMovieItem');
            }

            dispatch(actions.deleteMovieItemAC(data.data.hash));
            Notification('topRight', 'success', `Movie deleted success!`);

        } catch (error) {
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
