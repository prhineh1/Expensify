import { takeEvery } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects'
import * as Api from '../firebase/firebase';

function* watchExpenseSaga() {
    yield takeEvery('ADD_EXPENSE', addExpenseAsync);
}

export function* addExpenseAsync({ expense }) {
    const response = yield call(Api.create, expense);
    yield put({ 
        type: 'ADD_EXPENSE_COMPLETE', 
        expense: { id: response.key, ...expense}
    });
}

export default function* rootSaga() {
    yield [
      watchExpenseSaga()
    ]
  }