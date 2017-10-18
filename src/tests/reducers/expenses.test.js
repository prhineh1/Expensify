import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expnese by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expnese by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'a;lsdfj32rj'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        description: 'rent',
        amount: 85000,
        note: 'rent for last month',
        createdAt: 400,
        id: 'Panurge'
    };
    const action = {
        type: 'ADD_EXPENSE_COMPLETE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        description: 'This had been changed',
        amount: 777
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({ ...expenses[0], ...updates});
});

test('should not edit an expense if expense not found', () => {
    const updates = {
        description: 'This had been changed',
        amount: 777
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id + '21',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});