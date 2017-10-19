import { all } from 'redux-saga/effects'
import { watchAddExpenseSaga,
        watchSetExpensesSaga, 
        watchRemoveExpenseSaga, 
        watchEditExpenseSaga, } from './expenses';
import { watchStartLoginSaga, watchStartLogoutSaga } from './auth';

export function* rootSaga() {
    yield all([
      watchAddExpenseSaga(),
      watchSetExpensesSaga(),
      watchRemoveExpenseSaga(),
      watchEditExpenseSaga(),
      watchStartLoginSaga(),
      watchStartLogoutSaga()
    ]);
};