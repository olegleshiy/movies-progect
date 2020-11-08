//Actions
import { actions } from '../actions';

//Types
import { types } from '../types';

describe('ui actions:', () => {
    test('fetchingStart', () => {
        expect(actions.fetchingStart()).toEqual({
            type: types.FETCHING_START,
        });
    });

    test('fetchingStop', () => {
        expect(actions.fetchingStop()).toEqual({
            type: types.FETCHING_STOP,
        });
    });

    test('emitError', () => {
        expect(actions.emitError(__.error, __.errorMeta)).toEqual({
            type: types.EMIT_ERROR,
            payload: __.error,
            error:   true,
            meta: __.errorMeta
        });
    });
});