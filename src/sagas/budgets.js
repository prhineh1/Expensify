import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects';
import * as Api from '../firebase/firebase';

//WATCHERS

export function* watchAddBudgetSaga() {
  yield takeEvery('ADD_BUDGET', addBudgetAsync);
};

//WORKERS

export function* addBudgetAsync({ budget, uid }) {
  try {
    const response = yield call(Api.createBudget, budget, uid);
    yield put({
      type: 'ADD_BUDGET_COMPLETE',
      budget: { id: response.key, ...budget}
    }); 
  }
  catch(error) {
    return;
  }
};