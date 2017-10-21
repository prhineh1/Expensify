import ReactDOM from 'react-dom';
import { takeEvery } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects'
import * as Api from '../firebase/firebase';
import configureStore from '../store/configureStore';
import { jsx, renderApp } from '../app';

//WATCHERS

export function* watchAddExpenseSaga() {
    yield takeEvery('ADD_EXPENSE', addExpenseAsync);
};

export function* watchSetExpensesSaga() {
    yield takeEvery('SET_EXPENSES', setExpensesAsync);
};

export function* watchRemoveExpenseSaga() {
    yield takeEvery('REMOVE_EXPENSE', removeExpenseAsync);
};

export function* watchEditExpenseSaga() {
    yield takeEvery('EDIT_EXPENSE', editExpenseAsync);
}

//WORKERS

export function* addExpenseAsync({ expense, uid }) {
    const response = yield call(Api.create, expense, uid);
    yield put({ 
        type: 'ADD_EXPENSE_COMPLETE', 
        expense: { id: response.key, ...expense}
    });
};

export function* setExpensesAsync({ uid }) {
    const expenses = yield call(Api.get, uid);
    yield put({
        type: 'SET_EXPENSES_COMPLETE',
        expenses
    });
    yield call(renderApp);
};

export function* removeExpenseAsync({ id, uid }) {
    yield call(Api.remove, id, uid);
    yield put({
        type: 'REMOVE_EXPENSE_COMPLETE',
        id
    });
};

export function* editExpenseAsync({ updates, id, uid }) {
    yield call(Api.edit, updates, id, uid);
    yield put({
        type: 'EDIT_EXPENSE_COMPLETE',
        id,
        updates,
        uid
    });
};