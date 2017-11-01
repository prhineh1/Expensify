import { call, put } from 'redux-saga/effects';
import * as Sagas from '../../sagas/budgets';
import * as Actions from '../../actions/budgets';
import * as Api from '../../firebase/firebase';
import budget from '../fixtures/budgets';

const uid = 'abc123'

describe('testing addBudgetAsync saga', () => {
  const sagaBudget = Actions.addBudget(budget, uid);
  const iterator = Sagas.addBudgetAsync(sagaBudget);
  test('should return first value of iterator', () => {
    const response = iterator.next().value;
    expect(response).toEqual(call(Api.createBudget, budget, uid));
  });
  test('should return second value of iterator', () => {
    const response = iterator.next(budget).value;
    expect(response).toEqual(put({
      type: 'ADD_BUDGET_COMPLETE',
      budget
    }));
  });
  test('Saga should be done', () => {
    const response = iterator.next();
    expect(response).toEqual({done: true, value: undefined});
  });
});

describe('testing editBudgetAsync saga', () => {
  const sagaBudget = Actions.editBudget('29', { description: 'changed' },uid);
  const iterator = Sagas.editBudgetAsync(sagaBudget);
  test('should return first value of iterator', () => {
    const response = iterator.next().value;
    expect(response).toEqual(call(Api.editBudget, { description: 'changed' }, '29', uid));
  });
  test('should return second value of iterator', () => {
    const response = iterator.next().value;
    expect(response).toEqual(put({
      type: 'EDIT_BUDGET_COMPLETE',
      id: '29',
      changes: { description: 'changed' }
    }));
  });
  test('Saga should be done', () => {
    const response = iterator.next();
    expect(response).toEqual({done: true, value: undefined});
  });
});

describe('testing removeBudgetAsync saga', () => {
  const sagaBudget = Actions.removeBudget('29',uid);
  const iterator = Sagas.removeBudgetAsync(sagaBudget);
  test('should return first value of iterator', () => {
    const response = iterator.next().value;
    expect(response).toEqual(call(Api.removeBudget, '29', uid));
  });
  test('should return second value of iterator', () => {
    const response = iterator.next().value;
    expect(response).toEqual(put({
      type: 'REMOVE_BUDGET_COMPLETE',
      id: '29'
    }));
  });
  test('Saga should be done', () => {
    const response = iterator.next();
    expect(response).toEqual({done: true, value: undefined});
  });
});
