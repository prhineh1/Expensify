
export const addBudget = (budget = {}, uid) => ({
  type: 'ADD_BUDGET',
  budget,
  uid
});

export const addBudgetComplete = (budget = {}) => ({
  type: 'ADD_BUDGET_COMPLETE',
  budget,
});

export const setBudgets = (uid) => ({ 
  type: 'SET_BUDGETS',
  uid
});

export const setBudgetsComplete = (budgets) => ({ 
  type: 'SET_BUDGETS_COMPLETE', 
  budgets
});

export const editBudget = (id, changes, uid) => ({
  type: 'EDIT_BUDGET',
  id,
  changes, 
  uid
});

export const editBudgetComplete = (id, changes) => ({
  type: 'EDIT_BUDGET_COMPLETE',
  id,
  changes
});

export const removeBudget = (id, uid) => ({
  type: 'REMOVE_BUDGET',
  id,
  uid
});

export const removeBudgetComplete = (id) => ({
  type: 'REMOVE_BUDGET_COMPLETE',
  id
});