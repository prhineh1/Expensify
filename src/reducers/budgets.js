
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUDGET_COMPLETE':
      return [...state, action.budget];
    case 'SET_BUDGETS_COMPLETE':
      return action.budgets;
    default:
      return state;
  }
}