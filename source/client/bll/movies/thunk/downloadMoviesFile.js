// Instruments
import { api } from '../../../REST';
import { actions as uiActions } from '../../ui/actions';
import { Notification } from '../../../components/Notification';

export function downloadMoviesFile (file) {
    return async (dispatch) => {
        try {
            dispatch(uiActions.fetchingStart());

            const response = await api.movies.downloadFile(file);
            const { data } = response;

            if (response.status !== 201) {
                throw new Error('Some error downloadMovie');
            }

            Notification('topRight', 'success', `Movie downloaded success!`);

        } catch (error) {
            Notification('topRight', 'error', `Downloading file have incorrect data!`);
        } finally {
            dispatch(uiActions.fetchingStop());
        }
    }
}
