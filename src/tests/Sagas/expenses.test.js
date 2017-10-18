import { addExpenseAsync } from '../../sagas/expenses';
import { addExpenseComplete } from '../../actions/expenses';
import { call, put } from 'redux-saga/effects';
import expenses from '../fixtures/expenses';
import * as Api from '../../firebase/firebase';

const sagaExpense = addExpenseComplete(expenses[1]);

const iterator = addExpenseAsync(sagaExpense);


describe('testing addExpenseAsync', () => {
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




