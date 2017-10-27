
export const addBudget = (budget = {}, uid) => ({
  type: 'ADD_BUDGET',
  budget,
  uid
});

export const addBudgetComplete = (budget = {}) => ({
  type: 'ADD_BUDGET_COMPLETE',
  budget,
});