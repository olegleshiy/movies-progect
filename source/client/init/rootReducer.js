import { combineReducers } from 'redux';
import { moviesReducer as moviesPage } from '../bll/movies/reducer';
import { uiReducer as ui } from '../bll/ui/reducer';

const rootReducer = combineReducers({
    moviesPage,
    ui,
});

export default rootReducer;
