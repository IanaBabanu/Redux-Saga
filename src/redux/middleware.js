// Core
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = process.env.NODE_ENV === 'development' && devtools ? devtools : compose;

export { middleware, sagaMiddleware, composeEnhancers };
