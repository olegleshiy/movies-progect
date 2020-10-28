// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';

export function getMovieOne (hash) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.getById(hash);
            const { data } = response;

            if (response.status !== 200) {
                throw new Error('Some error getMovieOne');
            }

            dispatch(actions.setMovieItemAC(data.data));

        } catch (error) {
            dispatch(uiActions.emitError(error));
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
