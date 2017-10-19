import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../../routers/AppRouter';
import configureStore from '../../store/configureStore';
import { addExpenseAsync, setExpensesAsync, removeExpenseAsync } from '../../sagas/expenses';
import { addExpense, removeExpense } from '../../actions/expenses';
import { call, put } from 'redux-saga/effects';
import expenses from '../fixtures/expenses';
import * as Api from '../../firebase/firebase';


describe('testing addExpenseAsync', () => {
    const sagaExpense = addExpense(expenses[1]);
    const iterator = addExpenseAsync(sagaExpense);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.create, expenses[1]));
    });
    test('should return value from second iterator', () => {
        const response = iterator.next(expenses[1]).value;
        expect(response).toEqual(put({
            type: 'ADD_EXPENSE_COMPLETE',
            expense: { ...expenses[1] }
        }));
    });
    test('Saga should be done', () => {
        const response = iterator.next();
        expect(response).toEqual({done: true, value: undefined});
    });
});

describe('testing setExpensesAsync', () => {
    const iterator = setExpensesAsync();
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.get));
    });
    test('should return value from second iterator', () => {
        const response = iterator.next(expenses).value;
        expect(response).toEqual(put({
            type: 'SET_EXPENSES_COMPLETE',
            expenses
        }));
    });
    test('should return value from third iterator', () => {
        const response = iterator.next(expenses).value;
        expect(response).toEqual(expect.any(Object));
    });
    test('Saga should be done', () => {
        const response = iterator.next();
        expect(response).toEqual({done: true, value: undefined});
    });
});

describe('testing removeExpenseAsync', () => {
    const sagaExpense = removeExpense({ id: 'hi'})
    const iterator = removeExpenseAsync(sagaExpense);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.remove, 'hi'));
    });
    test('should return value from second iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(put({
            type: 'REMOVE_EXPENSE_COMPLETE',
            id: 'hi'
        }));
    });
    test('Saga should be done', () => {
        const response = iterator.next();
        expect(response).toEqual({done: true, value: undefined});
    });
});




