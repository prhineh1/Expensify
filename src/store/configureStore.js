import "babel-polyfill";

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import budgetsReducer from '../reducers/budgets';
import { rootSaga } from '../sagas/root';

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return {
        ...createStore(
            combineReducers({
                expenses: expensesReducer,
                filters: filterReducer,
                auth: authReducer,
                budgets: budgetsReducer
            }),
            composeEnhancers(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run
    }   
};

