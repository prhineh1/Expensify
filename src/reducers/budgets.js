
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUDGET_COMPLETE':
      return [...state, action.budget];
    case 'SET_BUDGETS_COMPLETE':
      return action.budgets;
    case 'EDIT_BUDGET_COMPLETE':
      return state.map((budget) => {
        if (budget.id == action.id) {
            return {
                ...budget,
                ...action.changes
            }
        } else {
            return budget;
        }
      });
    case 'REMOVE_BUDGET_COMPLETE':
      return state.filter(budget => budget.id !== action.id);
    default:
      return state;
  }
}