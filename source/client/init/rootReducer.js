import { combineReducers } from 'redux';
import { moviesReducer } from '../bll/movies/reducer';
import { uiReducer } from '../bll/ui/reducer';

const rootReducer = combineReducers({
    moviesPage: moviesReducer,
    ui: uiReducer,
});

export default rootReducer;
