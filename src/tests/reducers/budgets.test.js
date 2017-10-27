import budgets from '../fixtures/budgets';
import reducer from '../../reducers/budgets';


test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add a budget', () => {
  const action = {
    type: 'ADD_BUDGET_COMPLETE',
    budget: budgets
  };
  expect(reducer([], action)).toEqual([budgets]);
});