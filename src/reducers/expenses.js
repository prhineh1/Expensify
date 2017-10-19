//Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE_COMPLETE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE_COMPLETE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE_COMPLETE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES_COMPLETE':
            return action.expenses;
        default:
            return state;
    }
};
