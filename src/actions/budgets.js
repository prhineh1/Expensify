
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