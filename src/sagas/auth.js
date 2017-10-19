import { takeEvery, takeLatest } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects'
import * as Api from '../firebase/firebase';

//WATCHERS

export function* watchStartLoginSaga() {
    yield takeLatest('START_LOGIN', startLoginAsync);
};

export function* watchStartLogoutSaga() {
    yield takeLatest('START_LOGOUT', startLogoutAsync);
};

//WORKERS

export function* startLoginAsync() {
    yield call(Api.login);
};

export function* startLogoutAsync() {
    yield call(Api.logout);
}

