// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { actions } from '../actions';
import { Notification } from '../../../components/Notification';

export function downloadMoviesFile (file) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.downloadFile(file);
            const { data } = response;
            console.log('DATARES', data);
            if (response.status !== 201) {
                throw new Error('Some error downloadMovie');
            }

            //dispatch(actions.setMovieItemAC(data.data));
            Notification('topRight', 'success', `Movie downloaded success!`);

        } catch (error) {
            dispatch(uiActions.emitError(error));
            //Notification('topRight', 'error', `${error.message}`);
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
