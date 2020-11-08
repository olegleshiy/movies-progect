// Core
import { createStore, combineReducers } from 'redux';

//Reducers
import { moviesReducer as moviesPage } from '../../bll/movies/reducer';
import { uiReducer as ui } from '../../bll/ui/reducer';

//Store
import store from '../store';

export const referenceRootReducer = combineReducers({
    moviesPage,
    ui,
});

const referenceStore = createStore(referenceRootReducer);

describe('store', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
