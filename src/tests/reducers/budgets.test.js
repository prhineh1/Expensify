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

test('should set up state with budgets', () => {
  const action = {
    type: 'SET_BUDGETS_COMPLETE',
    budgets: [budgets, budgets]
  };
  expect(reducer([], action)).toEqual([budgets, budgets])
});

test('should edit a budget', () => {
  const action = {
    type: 'EDIT_BUDGET_COMPLETE',
    id: 'a;sdlfj2089',
    changes: {
      description: 'this has changed'
    }
  };
  const state = reducer([budgets], action);
  expect(state[0]).toEqual({...budgets, ...action.changes})
});

test('should not edit a budget', () => {
  const action = {
    type: 'EDIT_BUDGET_COMPLETE',
    id: 'dlfj2089',
    changes: {
      description: 'this has changed'
    }
  };
  const state = reducer([budgets], action);
  expect(state[0]).toEqual(budgets)
});

test('should remove a budget', () => {
  const action = {
    type: 'REMOVE_BUDGET_COMPLETE',
    id: 'a;sdlfj2089'
  };
  const state = reducer([budgets], action);
  expect(state).toEqual([]);
});

test('should not remove a budget', () => {
  const action = {
    type: 'REMOVE_BUDGET_COMPLETE',
    id: 'a;sj2089'
  };
  const state = reducer([budgets], action);
  expect(state).toEqual([budgets]);
});