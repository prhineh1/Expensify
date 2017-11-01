import * as actions from '../../actions/budgets';
import budgets from '../fixtures/budgets';

test('should correctly set addBudget action object', () => {
  const action = actions.addBudget(budgets, 'abc123');
  expect(action).toEqual({
    type: 'ADD_BUDGET',
    budget: budgets,
    uid: 'abc123'
  });
});

test('should correctly set addBudgetComplete action object', () => {
  const action = actions.addBudgetComplete(budgets);
  expect(action).toEqual({
    type: 'ADD_BUDGET_COMPLETE',
    budget: budgets,
  });
});

test('should correctly set setBudgets action object', () => {
  const action = actions.setBudgets('abc123');
  expect(action).toEqual({
    type: 'SET_BUDGETS',
    uid: 'abc123'
  });
});

test('should correctly set setBudgetsComplete action object', () => {
  const action = actions.setBudgetsComplete(budgets);
  expect(action).toEqual({
    type: 'SET_BUDGETS_COMPLETE',
    budgets
  });
});

test('should correctly set editBudget action object', () => {
  const changes = {
    description: 'food'
  };
  const action = actions.editBudget('12', changes, 'asdfjkl;');
  expect(action).toEqual({
    type: 'EDIT_BUDGET',
    id: '12',
    changes,
    uid: 'asdfjkl;'
  });
});

test('should correctly set editBudgetComplete action object', () => {
  const changes = {
    description: 'food'
  };
  const action = actions.editBudgetComplete('12', changes);
  expect(action).toEqual({
    type: 'EDIT_BUDGET_COMPLETE',
    id: '12',
    changes
  });
});

test('should correctly set removeBudget action object', () => {
  const action = actions.removeBudget('12', 'abc123');
  expect(action).toEqual({
    type: 'REMOVE_BUDGET',
    id: '12',
    uid: 'abc123'
  });
});

test('should correctly set removeBudgetComplete action object', () => {
  const action = actions.removeBudgetComplete('12');
  expect(action).toEqual({
    type: 'REMOVE_BUDGET_COMPLETE',
    id: '12',
  });
});