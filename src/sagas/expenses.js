import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';
import configureStore from '../store/configureStore';
import { takeEvery } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects'
import * as Api from '../firebase/firebase';
import { jsx } from '../app';

//WATCHERS

function* watchAddExpenseSaga() {
    yield takeEvery('ADD_EXPENSE', addExpenseAsync);
};

function* watchSetExpensesSaga() {
    yield takeEvery('SET_EXPENSES', setExpensesAsync);
};

function* watchRemoveExpenseSaga() {
    yield takeEvery('REMOVE_EXPENSE', removeExpenseAsync);
};

function* watchEditExpenseSaga() {
    yield takeEvery('EDIT_EXPENSE', editExpenseAsync);
}

//WORKERS

export function* addExpenseAsync({ expense }) {
    const response = yield call(Api.create, expense);
    yield put({ 
        type: 'ADD_EXPENSE_COMPLETE', 
        expense: { id: response.key, ...expense}
    });
};

export function* setExpensesAsync() {
    const expenses = yield call(Api.get);
    yield put({
        type: 'SET_EXPENSES_COMPLETE',
        expenses
    });
    yield call(ReactDOM.render, jsx, document.getElementById('app'))
};

export function* removeExpenseAsync({ id }) {
    yield call(Api.remove, id);
    yield put({
        type: 'REMOVE_EXPENSE_COMPLETE',
        id
    });
};

export function* editExpenseAsync({ updates, id }) {
    yield call(Api.edit, updates, id);
    yield put({
        type: 'EDIT_EXPENSES_COMPLETE',
        id,
        updates
    });
};

export function* rootSaga() {
    yield all([
      watchAddExpenseSaga(),
      watchSetExpensesSaga(),
      watchRemoveExpenseSaga(),
      watchEditExpenseSaga()
    ]);
};