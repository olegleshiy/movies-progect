//Reducer
import { uiReducer } from '../reducer';

//Actions
import { actions } from '../actions';

const initialState = {
    fetching: false,
    error: false,
};

describe('ui reducer:', () => {
    test('should return initial state by default', () => {
        expect(uiReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle FETCHING_START', () => {
        expect(uiReducer(void 0, actions.fetchingStart()))
            .toEqual({ ...initialState, fetching: true });
    });

    test('should handle FETCHING_STOP', () => {
        expect(uiReducer(void 0, actions.fetchingStop()))
            .toEqual({ ...initialState, fetching: false });
    });

    test('should handle EMIT_ERROR', () => {
        expect(uiReducer(void 0, actions.emitError()))
            .toEqual({ ...initialState, error: true });
    });
});
