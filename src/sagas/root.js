import { all } from 'redux-saga/effects'
import { watchAddExpenseSaga,
        watchSetExpensesSaga, 
        watchRemoveExpenseSaga, 
        watchEditExpenseSaga, } from './expenses';
import { watchStartLoginSaga, watchStartLogoutSaga } from './auth';
import { watchAddBudgetSaga,
         watchRemoveBudgetSaga,
         watchEditBudgetSaga } from './budgets';

export function* rootSaga() {
    yield all([
      watchAddExpenseSaga(),
      watchSetExpensesSaga(),
      watchRemoveExpenseSaga(),
      watchEditExpenseSaga(),
      watchStartLoginSaga(),
      watchStartLogoutSaga(),
      watchAddBudgetSaga(),
      watchRemoveBudgetSaga(),
      watchEditBudgetSaga()
    ]);
};