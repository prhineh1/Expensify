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