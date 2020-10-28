import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005'
    }
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = process.env.NODE_ENV === `development` && devtools ? devtools : compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}

let enhancedStore = composeEnhancers(applyMiddleware(...middlewares));

export { enhancedStore };
