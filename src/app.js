import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { setExpensesAsync } from './sagas/expenses';
import { rootSaga } from './sagas/root';
import * as firebase from 'firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import LoadingPage from './components/LoadingPage'

const store = configureStore();
store.runSaga(rootSaga);
export const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
export const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;                
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.runSaga(setExpensesAsync, user.uid).done.then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard/expenses');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();        
        history.push('/');
    }
});
