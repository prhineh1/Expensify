import { addExpenseAsync, setExpensesAsync, removeExpenseAsync, editExpenseAsync } from '../../sagas/expenses';
import { addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';
import { call, put } from 'redux-saga/effects';
import expenses from '../fixtures/expenses';
import * as Api from '../../firebase/firebase';

const uid ='abc123';

describe('testing addExpenseAsync', () => {
    const sagaExpense = addExpense(expenses[1], uid);
    const iterator = addExpenseAsync(sagaExpense);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.create, expenses[1], uid));
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
    const iterator = setExpensesAsync(uid);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.get, uid));
    });
    test('should return value from second iterator', () => {
        const response = iterator.next(expenses).value;
        expect(response).toEqual(put({
            type: 'SET_EXPENSES_COMPLETE',
            expenses
        }));
    });
    test('Saga should be done', () => {
        const response = iterator.next();
        expect(response).toEqual({done: true, value: undefined});
    });
});

describe('testing removeExpenseAsync', () => {
    const sagaExpense = removeExpense({ id: 'hi', uid })
    const iterator = removeExpenseAsync(sagaExpense);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.remove, 'hi', uid));
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

describe('testing editExpenseAsync', () => {
    const updates = {
        note: 'updated'
    };
    const sagaExpense = editExpense('hi', updates, uid);
    const iterator = editExpenseAsync(sagaExpense);
    test('should return value from first iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(call(Api.edit, updates, 'hi', uid));
    });
    test('should return value from second iterator', () => {
        const response = iterator.next().value;
        expect(response).toEqual(put({
            type: 'EDIT_EXPENSE_COMPLETE',
            id: 'hi',
            updates
        }));
    });
    test('Saga should be done', () => {
        const response = iterator.next();
        expect(response).toEqual({done: true, value: undefined});
    });
});





