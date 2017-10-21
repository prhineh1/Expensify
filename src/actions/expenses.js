import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE

export const addExpense = (expense = {}, uid) => ({
    type: 'ADD_EXPENSE',
    expense,
    uid
});

export const addExpenseComplete = (expense = {}) => ({
    type: 'ADD_EXPENSE_COMPLETE',
    expense,
});

//REMOVE_EXPENSE

export const removeExpense = ({ id, uid } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
    uid
});

export const removeExpenseComplete = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE_COMPLETE',
    id
});

//EDIT_EXPENSE

export const editExpense = (id, updates, uid) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
    uid
});

export const editExpenseComplete = (id, updates) => ({
    type: 'EDIT_EXPENSE_COMPLETE',
    id,
    updates
});

//SET_EXPENSES

export const setExpenses = (uid) => ({ type: 'SET_EXPENSES', uid });

export const setExpensesComplete = (expenses) => ({
    type: 'SET_EXPENSES_COMPLETE',
    expenses
});