import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects';
import * as Api from '../firebase/firebase';

//WATCHERS

export function* watchAddBudgetSaga() {
  yield takeEvery('ADD_BUDGET', addBudgetAsync);
};

export function* watchEditBudgetSaga() {
  yield takeEvery('EDIT_BUDGET', editBudgetAsync);
};

export function* watchRemoveBudgetSaga() {
  yield takeEvery('REMOVE_BUDGET', removeBudgetAsync);
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

export function* editBudgetAsync({ id, changes, uid }) {
  try {
    yield call(Api.editBudget, changes, id, uid);
    yield put({
      type: 'EDIT_BUDGET_COMPLETE',
      id,
      changes
    });
  }
  catch(error) {
    return;
  }
};

export function* removeBudgetAsync({ id, uid }) {
  try {
    yield call(Api.removeBudget, id, uid);
    yield put({
      type: 'REMOVE_BUDGET_COMPLETE',
      id
    });
  }
  catch(error) {
    return;
  }
};