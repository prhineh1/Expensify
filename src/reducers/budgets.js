export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUDGET_COMPLETE':
      return [...state, action.budget];
    default:
      return state;
  }
}