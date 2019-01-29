import {createStore,compose,applyMiddleware} from "redux"
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(mySaga)
export default store
