import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE

export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const addExpenseComplete = (expense = {}) => ({
    type: 'ADD_EXPENSE_COMPLETE',
    expense
});

//REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const removeExpenseComplete = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE_COMPLETE',
    id
});

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const editExpenseComplete = (id, updates) => ({
    type: 'EDIT_EXPENSE_COMPLETE',
    id,
    updates
});

//SET_EXPENSES

export const setExpenses = () => ({ type: 'SET_EXPENSES' });

export const setExpensesComplete = (expenses) => ({
    type: 'SET_EXPENSES_COMPLETE',
    expenses
});