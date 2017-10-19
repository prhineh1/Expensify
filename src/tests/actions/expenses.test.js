import { editExpenseComplete, removeExpenseComplete, addExpenseComplete, setExpensesComplete } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import * as firebase from 'firebase';


test('should setup remove expense action object', () => {
    const action = removeExpenseComplete({ id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE_COMPLETE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpenseComplete('123abc', { description: 'test-case'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE_COMPLETE',
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
    });
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