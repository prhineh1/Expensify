import { editExpense, removeExpense, addExpenseComplete, setExpensesComplete } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import * as firebase from 'firebase';
import { jsx } from '../../app';

beforeEach((done) => {
    const expensesData= {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    firebase.database().ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'test-case'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test-case'
        }
    });
});

test('should setup add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'test note',
        id: 'ldajsf;lasdjf'
    };
    const action = addExpenseComplete(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE_COMPLETE',
        expense: {
            ...expenseData,
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpenseComplete();
    expect(action).toEqual({
        type: 'ADD_EXPENSE_COMPLETE',
        expense: {}
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpensesComplete(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES_COMPLETE',
        expenses
    });
});