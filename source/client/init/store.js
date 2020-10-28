// Core
import { createStore } from 'redux';

// Roots
import rootReducer from './rootReducer';

// Middleware
import { enhancedStore } from './middleware/core';

let store = createStore(
    rootReducer,
    enhancedStore
);

export default store;
